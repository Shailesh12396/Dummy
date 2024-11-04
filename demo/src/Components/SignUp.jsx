import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', { name, email, phone, role });
    };

    return (
        <div className=" w-screen h-screen flex flex-col gap-8 justify-center items-center text-base">
            <div className="bg-gradient-to-br from-indigo-400 to-green-400 bg-opacity-60  w-1/3 rounded-3xl shadow-lg shadow-indigo-500">
                <div className="w-full h-28 bg-indigo-900 px-6 flex items-center justify-between rounded-t-3xl">
                    <div className="relative py-4 text-white">
                        <p className="text-xl font-medium leading-tight pb-1">Create an Account!</p>
                        <p className="pb-3">Fill in the details below</p>
                    </div>
                    <img src={logo} alt="logo" className="w-20 h-20 rounded-full border-4 border-indigo-900 border-opacity-5" />
                </div>

                <div className="mt-6 mx-6 text-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-1 text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Enter your name"
                                className="bg-transparent placeholder-black w-full border border-secondary rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1 text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="bg-transparent placeholder-black w-full border border-secondary rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-1 text-white">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                placeholder="Enter your phone number"
                                className="bg-transparent placeholder-black w-full border border-secondary rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="block mb-1 text-white">Role</label>
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                required
                                className="bg-transparent placeholder-text w-full border border-secondary rounded-xl py-1 pl-2 shadow-sm shadow-primary"
                            >
                                <option value="" disabled>Select a role</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                                <option value="institute">Institute</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-indigo-500 rounded-xl shadow-md"
                        >
                            <p className="text-primary font-medium mx-auto">
                                Sign Up
                            </p>
                        </button>
                    </form>
                    <p className="mt-4 cursor-pointer text-slate-100 text-center py-3">
                        Already have an account?{' '}
                        <Link to="/" className="text-green-700 hover:text-green-800 font-medium">
                            LogIn
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
