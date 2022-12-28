import React, { useState } from "react";
import ColorForm from "./ColorForm"
import ColorDetail from "./ColorDetail"

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
            {/* navbar goes here */}
        </div>
    )
};

export default ColorList;