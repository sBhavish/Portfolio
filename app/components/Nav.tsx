export default function Nav() {
    return (
        <nav className="flex h-full font-mono">
            <a aria-current="page" className="header-link active" href="/">About</a>
            <a className="header-link" href="/blog">Blog</a>
            <a className="header-link" href="/portfolio">Portfolio</a>
            <a className="header-link" href="/resume">Resume</a>
            <a className="header-link" href="/uses">Uses</a>
        </nav>

    );
}