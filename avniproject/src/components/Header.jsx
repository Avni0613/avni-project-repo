export default function Header({ title }) {
    return (
        <Header>
            <h1>{title}</h1>
            <nav className="nav"></nav>
            <nav>
                <a href="#">Home</a>
                <a href="#">Contact Us</a>
                <a href="#">Next webpage</a>
            </nav>

        </Header>
    )
}