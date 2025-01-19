import { useState } from "react";
import { LogInFormFields } from "./LogInFormFields";
import InputField from "../Shared/InputField";

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
            </form>
        </div >
    );
};
export default LogInForm;