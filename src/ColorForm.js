import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Form for adding a new color to add to a list / navbar.
 *
 * Has state for the color name / hexcode / rgb code as a string
 * on submission, sends {colorCode} to fn rec'd from parent.
 */

const ColorForm = ({addColor}) => {
    const [formData, setFormData] = useState({ name: "", hex: "#ffffff" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    /** Send {color} to parent & clear form. 
     * Redirect to colorList after submit
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ [formData.name]: formData.hex });
        navigate(`/colors`)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" >Color Name </label>
            <input
                id="name"
                type="text"
                placeholder="Enter a color name"
                name="name"
                value={formData.name}
                onChange={handleChange} />
            
            <label htmlFor="color" >Choose a color </label>
            <input
                id="hex"
                type="color"
                name="hex"
                value={formData.hex}
                onChange={handleChange} />
            
            <button onSubmit={handleSubmit}>Add Color</button>
        </form>
    )

};

export default ColorForm;