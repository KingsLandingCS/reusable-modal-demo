import { useState } from "react";
import { LogInFormFields } from "./LogInFormFields";
import InputField from "../Shared/InputField";
import ReusableModal from "../Shared/ReusableModal";

const LogInForm = () => {

    const [logInData, setlogInData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setlogInData({
            ...logInData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Initial Login State:", logInData);

    }

    const [showModal, setShowModal] = useState(false); // State for modal visibility


    const openModal = () => {
        setShowModal(true); // Open modal by setting state to true
    };

    const closeModal = () => {
        setShowModal(false); // Close modal by setting state to false
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-4"></h2>
            <form onSubmit={handleSubmit}>
                {LogInFormFields.map((field) => (
                    <InputField
                        key={field.name}
                        label={field.label}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={logInData[field.name]}
                        onChange={handleChange}
                    />
                ))}
                <button type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Login
                </button>

                {/* Button to trigger modal */}
                <button
                    type="button"
                    onClick={openModal}
                    className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none"
                >
                    Open Modal
                </button>
            </form>

            {/* Reusable Modal */}
            <ReusableModal
                isOpen={showModal}
                onRequestClose={closeModal}
                title="Modal Title"
            >
                <p>This is a reusable modal with dynamic content!</p>
                <p>You can pass custom content here.</p>
            </ReusableModal>
        </div >
    );
};
export default LogInForm;