import React, { useState } from "react";

/** Form for adding a new color to add to a list / navbar.
 *
 * Has state for the color name / hexcode / rgb code as a string
 * on submission, sends {colorCode} to fn rec'd from parent.
 */

const ColorForm = ({addColor}) => {
    const INITIAL_STATE = { color: "" };
    const [formData, setFormData] = useState[INITIAL_STATE];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    /** Send {color} to parent & clear form. 
     * Redirect to home page after submit
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color" >Choose a color </label>
            <input
                id="color"
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange} />
            <button>Add Color</button>
        </form>
    )

};

export default ColorForm;