import { Outlet, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import notFoundImage from "app/images/svg/404.svg"
export default function MainLayout() {

    return (
        <>
            <main>
                <img className="mx-auto w-full h-96 object-contain" src={notFoundImage} alt="Not Found" />
                <h1 className="text-center text-2xl">404 Page Not Found</h1>
                <p className="max-w-2xl mx-auto text-center my-6 font-sans text-pretty">Oops! It looks like the page you're looking for doesn't exist. Don't worry, you can find your way back using our navigation menu!</p>
            </main>
        </>
    );
}