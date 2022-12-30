import React, {useState, useEffect} from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorsList"
import ColorForm from "./ColorForm";
import ColorDetail from "./ColorDetail"

const ColorRoutes = () => {
    const INITIAL_STATE = JSON.parse(localStorage.getItem("colors")) || {
        crimson: "#dc143c",
        teal: "#008080",
        gold: "#ffd700"
    };

    const [colors, setColors] = useState(INITIAL_STATE);

    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [colors]);
    
    const addColor = (newColor) => {
        setColors(colors => ({ ...colors, ...newColor }));
    };

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