import { HeadersFunction, json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { blogs } from "~/Constants"
import { Item } from "~/DTO"
import pb from "~/components/portfolio.server"
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from "react"
import { convertDateString } from "~/utils"

export async function loader({ params }: LoaderFunctionArgs) {
    const blog = await pb.collection(blogs).getFirstListItem(`title = "${params.slug}"`) as Item
    return json({blog})
}
export let headers: HeadersFunction = () => {
    return {
        "Cache-Control": "public, s-maxage=60",
    };
};
export const meta: MetaFunction = ({ data }) => {
    return [
        { title: data.blog.title  as string },
        {
            name: 'description',
            content: `A Blog on ${data.blog.title}`,
        },
    ]
}
export default function BlogContent (){
    const data =  useLoaderData<typeof loader>()

    useEffect(() => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block as HTMLElement);
        });
    }, [data.blog.markupContent]);
    return (
        <main>
            <section className="mx-auto max-w-6xl">
                <div className="hero p-4 text-center py-20 md:py-40">
                    <h1 className="inline-block font-font-serif text-xl font-extrabold md:text-4xl">
                        <div className="font-font-monospace text-base font-normal md:text-2xl">{convertDateString(data.blog.updated)}</div>
                        <div className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 text-transparent bg-clip-text px-3 text-4xl md:text-7xl">{data.blog.title}</div>
                    </h1>
                </div>
            </section>
            <img
                className="w-full h-auto"
                src={`${ENV.BASE_URL}/api/files/${data.blog.collectionId}/${data.blog.id}/${data.blog.heroImage}`}
                alt="Hero Image for this blog" />
            <div className="my-8 md:my-12 m-auto w-full max-w-4xl p-4">
                <h2 className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 text-transparent bg-clip-text m-0 mb-2 inline-block text-left text-3xl md:text-4xl">
                    {data.blog.title}
                </h2>
                <div className="font-font-monospace text-sm">
                    {convertDateString(data.blog.updated)}
                </div>
            </div>
            <section className="wysiwyg m-auto w-full max-w-4xl font-sans p-4 mb-10" dangerouslySetInnerHTML={{__html: `${data.blog.markupContent}`}}>
                
            </section>
        </main>
    )
}