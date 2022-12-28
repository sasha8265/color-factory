import { NavLink } from "react-router-dom";

const NavBar = ({ colors }) => {
    const links = colors.map(color => (
        <NavLink key={color.color} to={`/colors/${color.color.toLowerCase()}`}>{color.color}</NavLink>
    ))
    return (
        <nav>
            <NavLink to="/colors">Home</NavLink>
            {links}
        </nav>
    )
}

export default NavBar;