import BlogsList from "./BlogsList";
import { Blogs } from "~/DTO";
export default function Featured({minimalBlogData}:{ minimalBlogData : Blogs}) {
    return (
        <>
            <section className="section-full m-auto flex max-w-6xl flex-col items-center justify-center gap-20 px-4 py-20">
                <div className="flex flex-col gap-20 md:flex-row">
                    <a className="blog-preview relative flex flex-col basis-2/3" href="/blog/github-copilot">
                        <img alt="Github CoPilot" height="auto" loading="lazy" src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/pf9KYTVDTqe6RoxfaFfm" width="auto"/>
                            <h2 className="mt-4 mb-2 text-2xl">Github CoPilot</h2>
                            <div className="font-font-monospace text-sm">07/18/2022</div>
                    </a>
                    <div className="flex flex-col gap-10 basis-1/3">
                        <div>
                            <h3 className="text-2xl">Upcoming Posts</h3>
                            <ul className="mt-8">
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">Escape Hatches - brought up in Vercel conf</li>
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">We are all salesmen, quick prototypes, sandboxes</li>
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">Developer tooling - debuggers &amp; loggers</li>
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">Lerna is back!</li>
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">You are not Google - moving quickly</li>
                                <li className="mb-2 rounded-md border bg-color-background-light p-2 text-sm">Reviewing pull requests - a simple framework</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <BlogsList minimalBlogData={minimalBlogData}/>
            </section>
        </>
    )
}