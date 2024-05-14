import Logo from "~/icons/logo";
import Nav from "./Nav";
import logo from "app/images/logo.png";
export default function HeaderComponent() {
    return (
        <header className="header overflow-hidden print:hidden">
            <Logo/>
            <Nav/>
        </header>
    );
}