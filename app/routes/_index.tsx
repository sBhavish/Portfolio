import { defer, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { about } from "~/Constants";
import { CompanyData } from "~/DTO";
import HeroHome from "~/components/about/Hero";
import About from "~/components/about/about";
import Companies from "~/components/about/companies";
import Goals from "~/components/about/goals";
import Technologies from "~/components/about/technologies";
import pb, { authData } from "~/components/portfolio.server";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export const loader = async () => {
  try {
    let authData = await pb.admins.authWithPassword(process.env.POCKETBASE_EMAIL as string, process.env.POCKETBASE_PASS as string);
    const companyRecords = await pb.collection(about).getFirstListItem('') as CompanyData
    pb.authStore.clear()
    return defer({ companies: companyRecords });
} catch (err) {
  console.error(err);
  return { companies: null}
}
  
};

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="alternate-bg">
      <HeroHome/>
      <About/>
      <Goals/>
      <Technologies/>
      <Companies data={data.companies as CompanyData}/>
    </div>
  );
}
