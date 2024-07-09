import { HeadersFunction, defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { CACHE_LIV, PAGE, PERPAGE, projects } from "~/Constants";
import { Projects } from "~/DTO/project";
import BlogHero from "~/components/blogs/blogHero";

import pb from "~/components/portfolio.server";
import { WorkPreview } from "~/components/portfolio/cards";
import { redisClient, saveCache } from "~/functions/redis.server";
export const meta: MetaFunction = () => {
    return [
        { title: "Featured Work | Bhavish Kotian" },
        {
            property: "og:title",
            content: "Featured works",
        },
        {
            name: "description",
            content: "Featured works by Bhavish",
        },
    ];
};
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
    try{
        let { searchParams } = new URL(request.url)
        let page = searchParams.get('page')
        let pageNumber = page ? parseInt(page, 10) : PAGE;

        if (isNaN(pageNumber)) {
            pageNumber = PAGE;
        }
        const cache = await redisClient(`${projects}${pageNumber}`)
        if (cache !== null) {
            const parsedCache: Projects = JSON.parse(cache);
            return defer({ projects: parsedCache });
        }
        pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
        const resultList = await pb.collection(projects).getList(pageNumber, PERPAGE, {
            fields: 'id,projectName,tag,projectYear,sideNote',
        }) as Projects;
        saveCache(`${projects}${pageNumber}`, resultList)
        return defer({ projects: resultList });
    }catch(ex){
        throw new Response("Oh no! Something went wrong!", {
            status: 500,
        });
    }
    
};
export default function PortfolioMain() {
    const { projects } = useLoaderData<typeof loader>()
    return (
        <>
            <main>
                <BlogHero light={true} minor="Right now..." major="What I'm Building" />
                    <div className="py-8">
                        <div className="mx-auto md:max-w-6xl">

                            <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                {
                                    projects.items?.filter(item => !item.todo)
                                        .map((item, index) => {
                                            return (
                                                <WorkPreview year={item.projectYear} key={index} title={item.projectName} url={`/portfolio/${item.projectName}`} spanTitle={item?.tag} description={item.sideNote} />
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
            </main>
        </>
    );
}