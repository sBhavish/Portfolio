import { Link } from "@remix-run/react";
import { Blogs } from "~/DTO";
import { convertDateString } from "~/utils";

export default function BlogsList({ minimalBlogData }: { minimalBlogData: Blogs }){
    return (
        <>
            <div className="grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
                {minimalBlogData?.items?.map((item, index) =>{
                    return (
                        <Link prefetch="intent" className="blog-preview relative flex flex-col" to={`/blog/${item.title}`}>
                            <img alt={item.title} height="auto" loading="lazy" src={`${ENV.BASE_URL}/api/files/${item.collectionId}/${item.id}/${item.heroImage}`} width="auto" />
                            <h2 className="mt-4 mb-2 text-2xl"> {item.title} </h2>
                            <div className="font-font-monospace text-sm"> {convertDateString(item.updated)} </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}