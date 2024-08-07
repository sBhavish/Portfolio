import { HeadersFunction, MetaFunction } from "@remix-run/node";
import { defer, useLoaderData } from "@remix-run/react";
import { CACHE_LIV, PAGE, PERPAGE, blogs } from "~/Constants";
import { Blogs } from "~/DTO/blog";
import Featured from "~/components/blogs/Featured";
import BlogHero from "~/components/blogs/blogHero";
import pb from "~/components/portfolio.server";
import { redisClient, saveCache } from "~/functions/redis.server";
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": `public, s-maxage=${CACHE_LIV}`,
    };
};
export const meta: MetaFunction = () => {
    return [
        { title: "Blogs" },
        {
            property: "og:title",
            content: "Blogs/Articles by Bhavish",
        },
        {
            name: "description",
            content: "Blogs/Articles by Bhavish",
        },
    ];
};
export const loader = async ({ request }: LoaderFunctionArgs) => {
    const cache = await redisClient(blogs)
    let { searchParams } = new URL(request.url)
    let page = searchParams.get('page')
    let pageNumber = page ? parseInt(page, 10) : PAGE;

    if (isNaN(pageNumber)) {
        pageNumber = PAGE;
    }
    if (cache !== null) {
        const parsedCache: Blogs = JSON.parse(cache);
        return defer({ blogsData: parsedCache });
    }
    pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
    const resultList = await pb.collection(blogs).getList(pageNumber, PERPAGE, {
        fields: 'id,title,updated,heroImage,collectionId,created,featured,released',
    }) as Blogs;
    saveCache( `${blogs}${pageNumber}`, resultList)
    return defer({ blogsData: resultList });
};
export default function Index() {
    const data = useLoaderData<typeof loader>()
    return (
        <>
            <main>
                <BlogHero light={true} minor="Yes Another Blog....." major="Developer Ramblings" />
                <Featured minimalBlogData={data.blogsData} />
            </main>
        </>
    );
}
