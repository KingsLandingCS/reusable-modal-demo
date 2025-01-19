import { useState } from "react";
import InputField from "../Shared/InputField"; // Import the Input component
import { EditProfiledata } from "./EditProfiledata"; // Import the fields data

const EditProfile = () => {
    // Define state to hold form data dynamically based on the fields array
    const [editData, setEditData] = useState(
        EditProfiledata.reduce((acc, field) => {
            acc[field.name] = ""; // Initialize form data with empty values
            return acc;
        }, {})
    );

    // Handle change for input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({
            ...editData,
            [name]: value, // Update the specific field in editData
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", editData); // Log the form data (editData)
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                {EditProfiledata.map((field) => (
                    <InputField
                        key={field.name} // Key for each dynamic input
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={editData[field.name]} // Bind value to editData
                        onChange={handleChange}
                        className="mb-4"
                    />
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
