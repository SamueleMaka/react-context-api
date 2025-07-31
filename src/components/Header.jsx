import "./Header.css"
import { NavLink } from "react-router"
function Header() {
    return(
        <>
            <div className="headerContainer">
                <div className="linkContainer">
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                    <NavLink to={"/aboutus"}>
                        About Us
                    </NavLink>
                    <NavLink to={"/products"}>
                        Products
                    </NavLink>
                </div>
            </div>
        </>
    )
    
}

export default Header