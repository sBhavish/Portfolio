import { CompanyData } from "~/DTO";
import DOMPurify from "isomorphic-dompurify";

export default function Companies({data} : {data : CompanyData}){
    const sanitizeData = DOMPurify.sanitize(data.CompData)
    return (<>
        <div className="company-slides" dangerouslySetInnerHTML={{ __html: sanitizeData }}>
        </div>
       
    </>)
}