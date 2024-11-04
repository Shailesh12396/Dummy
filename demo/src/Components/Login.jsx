import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import loginImage from '../assets/login_page.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="bg-gradient-to-b  w-screen h-screen flex flex-col gap-8 justify-center items-center text-base">
            <div className="bg-gradient-to-br from-indigo-400 to-green-400 bg-opacity-60 h-2/3 w-1/3 rounded-3xl shadow-lg shadow-indigo-500">
                <div className="w-full h-28 bg-indigo-900 px-6 flex justify-between rounded-t-3xl">
                    <div className="relative py-4 text-white">
                        <p className="text-xl font-medium leading-tight pb-1">Welcome Back!</p>
                        <p className="pb-3">Sign in to continue</p>
                        <img src={logo} className="w-20 h-20 rounded-full absolute border-4 border-indigo-900 border-opacity-5" alt="Logo" />
                    </div>
                    <img src={loginImage} alt="Login illustration" className="h-full" />
                </div>
                <div className="mt-16 mx-6 text-lg text-white">
                    <form onSubmit={handleSubmit} className="mt-6">
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email"
                            className="bg-transparent placeholder-white w-full border border-white rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            required
                        />
                        <label htmlFor="password" className="block mt-2 mb-1">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            className="bg-transparent placeholder-white w-full border border-white rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            required
                        />
                        <label className="block">
                            <input type="checkbox" className="mt-4 mb-6 mr-2 rounded-full" />
                            Remember me
                        </label>
                        <button type="submit" className="w-full py-2 bg-indigo-500 rounded-xl shadow-md border border-green-500">
                            <p className="text-white font-medium mx-auto">Log in</p>
                        </button>
                    </form>
                    <p className="text-lg text-white text-center py-2">
                        Don't have an account? &nbsp;
                        <Link to="/signup" className="text-blue-500 hover:underline">
                            SignUp
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Login;
