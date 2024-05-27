import { defer, useLoaderData } from "@remix-run/react";
import { PAGE, PERPAGE, blogs } from "~/Constants";
import { Blogs } from "~/DTO";
import Featured from "~/components/blogs/Featured";
import BlogHero from "~/components/blogs/blogHero";
import pb from "~/components/portfolio.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
        let { searchParams } = new URL(request.url)
        let page = searchParams.get('page')
        let pageNumber = page ? parseInt(page, 10) : PAGE;

        if (isNaN(pageNumber)) {
            pageNumber = PAGE;
        }
        pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
        const resultList = await pb.collection(blogs).getList(pageNumber, PERPAGE, {
            fields: 'id,title,updated,heroImage,collectionId,created',
        }) as Blogs;
        return defer({ blogsData: resultList });
};
export default function Index() {
    const data = useLoaderData<typeof loader>()
    return (
        <>
            <BlogHero/>
            <Featured minimalBlogData={data.blogsData}/>
        </>
    );
}
