import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";


const ColorDetail = () => {
    const { color } = useParams();

    if (!color) return <Navigate to="/colors" replace />
    return (
        <div className="ColorDetail">
            <Link to="/colors">Back</Link>
            <h1 className="ColorDetail-title">{color.color}</h1>
        </div>
    )
};

export default ColorDetail;