import React, { useState } from "react";
import { Link } from "react-router-dom"
import { FormField, SubmitButton, FormWrapper } from "../components"

const Login = () => {
    const [error, setError] = useState(false);
    const [formFields, setFormFields] = useState({ email: "", password: "" });
    const isInvalid = formFields.email === "" || formFields.password === "";

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormFields((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formFields);
    };

    return (

        <FormWrapper>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[600px]">
                <div className="px-6 py-8 bg-white shadow w-[300px] sm:w-[400px] ">
                    <div>
                        logo
                    </div>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        {error.signError && (
                            <span className="block text-sm text-center text-red-primary">
                                {error.signError}
                            </span>
                        )}
                        <FormField
                            id="email"
                            label="Email address"
                            value={formFields.email}
                            onChange={handleInputChange}
                            name="email"
                            type="email"
                        />

                        <FormField
                            id="password"
                            label="password"
                            value={formFields.password}
                            onChange={handleInputChange}
                            name="password"
                            type="password"
                        />


                        <SubmitButton name="Log In" isInvalid={isInvalid} />
                    </form>

                    <div>
                        <div className="mt-2 text-sm  text-blue-600 text-left">
                            <Link to="#" className="font-medium">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 py-4 mt-3 text-gray-600 font-semibold text-center bg-white shadow sm:px-10">
                Need an account?
                <Link to="/register">
                    <span className="ml-2 text-blue-600 cursor-pointer">
                        Register
                    </span>
                </Link>
            </div>
        </FormWrapper>

    );
}

export default Login