import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";


const ColorDetail = () => {
    const colors = JSON.parse(localStorage.getItem("colors"))
    const { color } = useParams();
    const hex = colors[color]

    if (!color || !hex ) return <Navigate to="/colors" replace />
    return (
        <div className="ColorDetail" style={{ backgroundColor: hex }}>
            <Link to="/colors">Back</Link>
            <h1 className="ColorDetail-title">{color}</h1>
        </div>
    )
};

export default ColorDetail;