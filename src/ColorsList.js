import React from "react";
import { Link } from "react-router-dom";

/** Use colors object from parent to render list of user's colors with links */
const ColorList = ({colors}) => {
    const colorLinks = Object.keys(colors).map(color => (
        <li key={color}><Link to={`/colors/${color}`}>{color}</Link></li>
    ))
    

    return (
        <div>
            <div className="ColorsList">
                <h1 className="ColorsList-title">Color Factory</h1>
                <Link to="/colors/new">Add a Color</Link>
            </div>
            <div className="ColorsList-list">
                <h2 className="ColorsList-intro">Select a Color</h2>
                <ul>
                    {colorLinks}
                </ul>
            </div>
        </div>
    )
};

export default ColorList;