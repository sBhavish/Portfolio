import { HeadersFunction, defer, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { about } from "~/Constants";
import { CompanyData } from "~/DTO";
import HeroHome from "~/components/about/Hero";
import About from "~/components/about/about";
import Companies from "~/components/about/companies";
import Goals from "~/components/about/goals";
import Technologies from "~/components/about/technologies";
import pb from "~/components/portfolio.server";
export let headers: HeadersFunction = () => {
  return {
    "Cache-Control": `public, s-maxage=3600`,
  };
};
export const meta: MetaFunction = () => {
  return [
    { title: "About Bhavish" },
    { name: "description", content: "Welcome to my website!👾" },
  ];
};
export const loader = async () => {
  try {
    pb.authStore.save(process.env.POCKETBASE_TOKEN as string, null)
    const companyRecords = await pb.collection(about).getFirstListItem('') as CompanyData
    return defer({ companies: companyRecords });
  } catch (err) {
    console.error(err);
    return { companies: null }
  }

};

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div>
      <HeroHome />
      <About />
      <Goals />
      <Technologies />
      <Companies data={data.companies as CompanyData} />
    </div>
  );
}
