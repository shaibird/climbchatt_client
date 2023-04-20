import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"



export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar-container">
            <nav className="nav-right">
                <Link className="nav-right" to="/home">Home</Link>
                <Link className="nav-right" to="/explore">Explore</Link>
            </nav>
            <nav className="nav-left">
            {
                (localStorage.getItem("cc_token") !== null) ?
                    <ul className="nav-item">
                        <Link className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("cc_token")
                                navigate('/login')
                            }}
                        >Logout</Link>
                    </ul> :
                    <>
                        <ul className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </ul>
                    </>
            }        </nav>
            </nav>
    )
}

