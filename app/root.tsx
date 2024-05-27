import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
  useLoaderData,
} from "@remix-run/react";
import styles from "~/styles/root.css?url";
import tailwindcss from "~/tailwind.css?url";
import HeaderComponent from "./components/header";
import FooterComponent from "./components/footer";
import { getEnv } from "./provider.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailwindcss},
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  }
];

export const loader = async () => {
  return json({
    ENV: getEnv()
  });
};
export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <HeaderComponent/>
        {children}
        <ScrollRestoration />
        <FooterComponent/>
        <Scripts />
        <script dangerouslySetInnerHTML={{__html: `window.ENV = ${JSON.stringify(data.ENV)}`}}/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
