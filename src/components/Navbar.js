// import classes from "Cities.module.css";

import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
    return(
        <nav>
            <div>
                <NavLink to="/cities"><Button/></NavLink>
            </div>
        </nav>
    )
}

export default Navbar;