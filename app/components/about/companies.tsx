import { CompanyData } from "~/DTO/DTO";
import DOMPurify from "isomorphic-dompurify";

export default function Companies({ data }: { data: CompanyData }) {
    const sanitizeData = DOMPurify.sanitize(data.CompData)
    return (
        <>
            <section className="gap-6 grid place-items-center py-16 px-6">
                <h1 className="lg:text-4xl text-2xl text-center text-pretty content-font font-extrabold w-fit mx-auto">{data.CompTitle}</h1>
                <div className="grid company-slides max-w-6xl w-full" dangerouslySetInnerHTML={{ __html: sanitizeData }}>
                    </div>
            </section>
        </>
    )
}