import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./ColorsList"
import ColorForm from "./ColorForm";
import ColorDetail from "./ColorDetail"

const ColorRoutes = () => {
    return (
        <Routes>
            <Route exact path="/colors" element={<ColorList />}></Route>
            <Route exact path="/colors/new" element={<ColorForm />}></Route>
            <Route path="/colors/:color" element={<ColorDetail />}></Route>
            <Route path="/" element={<Navigate to="/colors" replace />} />
        </Routes>
    )
};

export default ColorRoutes;