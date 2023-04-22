import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"
import { MdHomeFilled } from 'react-icons/md';
import { TbMapPinFilled } from 'react-icons/tb'



export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <nav className="navbar-container">
            <nav className="nav-right">
                <Link className="nav-link home" to="/home"><div className="icon"> <MdHomeFilled /></div> Home</Link>
                <Link className="nav-link explore" to="/explore"><div className="icon"><TbMapPinFilled /></div>Explore</Link>
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
                    </>
            }        </nav>
            </nav>
    )
}

