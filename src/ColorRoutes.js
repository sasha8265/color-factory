import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorsList"
import ColorForm from "./ColorForm";
import ColorDetail from "./ColorDetail"

/** Set initial state with colors. **/
const ColorRoutes = () => {
    const INITIAL_STATE = JSON.parse(localStorage.getItem("colors")) || {
        crimson: "#dc143c",
        teal: "#008080",
        gold: "#ffd700"
    };

    const [colors, setColors] = useState(INITIAL_STATE);

    /** useEffect to store user's colors in local storage. */
    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [colors]);
    
    /** addColor function to pass to ColorForm component for handling form submition  */
    const addColor = (newColor) => {
        setColors(colors => ({ ...colors, ...newColor }));
    };

    /** List of user routes
     * /colors - All colors list
     * /colors/new - renders color picker form
     * /colors/:color - renders detail page for each color
     * / - home; redirects to /colors
     */
    return (
        <Routes>
            <Route exact path="/colors" element={<ColorList colors={colors} />}></Route>
            <Route exact path="/colors/new" element={<ColorForm addColor={addColor} />}></Route>
            <Route path="/colors/:color" element={<ColorDetail />}></Route>
            <Route path="/" element={<Navigate to="/colors" replace />} />
        </Routes>
    )
};

export default ColorRoutes;