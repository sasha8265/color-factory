import React, { useState } from "react";
import NavLinks from "./Nav"

const ColorList = () => {
    const INITIAL_STATE = [
        { id: "crimson", color: "crimson" },
        { id: "teal", color: "teal" },
        { id: "gold", color: "gold" }
    ]
    const [colors, setColors] = useState(INITIAL_STATE);
    const addColor = (newColor) => {
        setColors(colors => [...colors, ...newColor]);
    };

    return (
        <div className="ColorsList">
            <h1 className="ColorsList-title">Color Factory</h1>
            <Link to="/colors/new">Add a Color</Link>
            <NavLinks colors={colors} />
        </div>
    )
};

export default ColorList;