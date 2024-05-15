import { CompanyData } from "~/DTO";
import DOMPurify from "isomorphic-dompurify";

export default function Companies({ data }: { data: CompanyData }) {
    const sanitizeData = DOMPurify.sanitize(data.CompData)
    return (
        <>
            <section className="gap-6 grid py-16 bg-white">
                    <h1 className="text-4xl font-extrabold font-sans w-fit mx-auto">{data.CompTitle}</h1>
                    <div className="grid company-slides" dangerouslySetInnerHTML={{ __html: sanitizeData }}>
                    </div>
            </section>
        </>
    )
}