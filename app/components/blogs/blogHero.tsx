export default function BlogHero({minor, major, light=false}:{minor:string, major:string, light: boolean}) {
    return (
        <>
            <section className={`title-bg`}>
                <div className="hero p-4 text-center mx-auto max-w-6xl py-20 md:py-40">
                    <h1 className="inline-block text-xl font-extrabold md:text-4xl">
                        <div className={`font-monospace text-base font-normal md:text-2xl`}>{minor}</div>
                        <div className="py-2 font-font-serif text-highlight px-3 text-4xl md:text-7xl">{major}</div>
                    </h1>
                </div>
            </section>  
        </>
    )
}