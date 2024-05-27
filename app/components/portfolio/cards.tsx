import { Link } from "@remix-run/react";
export const WorkPreview = ({ title, spanTitle, description, url }:{title:string, spanTitle:string, description:string, url:string}) => {
    return (
        <Link className="work-preview text-color-copy font-sans" to={url}>
            <h3 className="m-0 text-xl font-bold">{title}</h3>
            <div className="mt-1 mb-6 flex items-baseline gap-2 font-medium text-color-copy-dark">
                <span>{spanTitle}</span>
            </div>
            <p>{description}</p>
        </Link>
    );
};