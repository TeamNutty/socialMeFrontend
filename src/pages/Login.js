import React from "react";
import { useHistory } from "react-router-dom";
import DropdownNotification from "../components/dropdown/DropdownNotification";

function Login() {
    // history
    const history = useHistory();
    // function
    const handleClickRegister = () => {
        history.push("/register");
    };
    return (
        <div className="w-full justify-center mt-0 flex lg:h-screen lg:mt-10">
            <div className="shadow-lg w-full flex flex-col bg-white md:w-2/3 lg:flex-row lg:h-5/6 lg:rounded-3xl">
                <div className="bg-primary-grad text-white w-full p-10 pt-20 flex flex-col  items-center lg:w-2/3 lg:rounded-l-3xl lg:pt-32">
                    <p className="text-4xl">Welcome To Me</p>
                    <div className="flex flex-col justify-between items-center h-1/3 mt-10 font-light lg:h-1/3 lg:justify-between">
                        <p className="text-xl">Me Social Media</p>
                        <p className="text-xl">Exclusive Content</p>
                        <p className="text-xl">For contents creater</p>
                        <p className="text-xl">and everyone</p>
                    </div>
                    <button
                        onClick={handleClickRegister}
                        className="h-12 bg-white text-red-400 shadow-lg rounded-full p-2 w-1/2 mt-20"
                    >
                        SIGN UP
                    </button>
                </div>
                <div className="p-10 flex flex-col justify-between items-center w-full pt-20 lg:h-full">
                    <p className="text-gray-400 text-2xl">Sign into Your account</p>
                    <form className="flex flex-col h-full justify-between w-2/3 mt-10 lg:h-3/5">
                        {/* form */}
                        <input
                            type="text"
                            className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Email Address"
                        />
                        <p className="pl-10 text-red-600 mt-2 mb-5">Email is required</p>
                        {/* icon */}

                        {/* form */}
                        <input
                            type="password"
                            className="h-12 border rounded-full border-red-400 p-1.5 shadow-lg pl-5 focus:outline-none focus:ring-2 focus:ring-red-400"
                            placeholder="Password"
                        />
                        <p className="pl-10 text-red-600 mt-2 mb-5">Password is required</p>

                        <button className="h-12 bg-primary-grad forhover text-white rounded-full p-2 shadow-lg mt-5 w-3/4 m-auto lg:w-1/2">
                            SIGN IN
                        </button>
                    </form>
                    <div className="flex items-center justify-around w-2/3 mt-10 lg:mt-0">
                        <p className="text-gray-500 text-xl">Sign in with</p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                            className="w-12"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/480px-Facebook_Logo_%282019%29.png"
                            className="w-12"
                        />
                    </div>
                </div>
            </div>
            <DropdownNotification />
        </div>
    );
}

export default Login;
