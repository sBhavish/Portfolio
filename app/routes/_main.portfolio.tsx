import { HeadersFunction } from "@remix-run/node";
import { WorkPreview } from "~/components/portfolio/cards";
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
        "Cache-Control": "public, s-maxage=60",
    };
};
export default function PortfolioMain() {

    return (
        <>
            <main>
                <div className="bg-color-background-dark text-color-background">
                    <div className="hero p-4 text-center py-20 md:py-40">
                        <h1 className="inline-block  text-xl font-extrabold md:text-4xl">
                            <div className="font-monospace text-base text-white font-normal md:text-2xl">Right now...</div>
                            <div className="py-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-400 text-transparent bg-clip-text px-3 text-4xl md:text-7xl">What I'm building</div>
                        </h1>
                    </div>
                </div>
                <div className="mx-auto md:max-w-6xl">
                    <div className="my-20 grid grid-cols-1 gap-16 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        <WorkPreview title={'RocketCMS'} url={`/portfolio/my-text`} spanTitle={'Personal'} description={`RocketCMS lets anyone manage your website using the components you've designed.`}/>
                        <WorkPreview title={'RocketCMS'} url={`/portfolio/my-text`} spanTitle={'Personal'} description={`RocketCMS lets anyone manage your website using the components you've designed.`} />
                        <WorkPreview title={'RocketCMS'} url={`/portfolio/my-text`} spanTitle={'Personal'} description={`RocketCMS lets anyone manage your website using the components you've designed.`} />
                    </div>
                </div>
            </main>
        </>
    );
}