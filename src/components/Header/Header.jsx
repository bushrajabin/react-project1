import "./Header.css"

function Header() {
    return (
        <nav className="header">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="link">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">contact</a>
                <a href="">Details</a>
            </div>
        </nav>
    )
}

export default Header;