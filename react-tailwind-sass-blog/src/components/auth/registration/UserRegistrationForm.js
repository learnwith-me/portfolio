import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function UserRegistrationForm({ closeModal }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();



    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            username: username,
            password: password,
            email: email,
            firstname: firstname,
            lastname: lastname,
            role: "subscriber",
        };

        try {
            const response = await fetch('https://harshadpatil.com/wp-backend/wp-json/wc/w3/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('User created successfully!');

                setTimeout(function () {
                    navigate('/login')
                }, 2000);
                // Perform any other necessary actions, such as redirecting the user.
            } else {
                setMessage(`Error: ${data.message}`);
                // Handle the error scenario, display appropriate message, etc.
            }
        } catch (error) {
            setMessage('An error occurred. Please try again.');
            // Handle the error scenario, display appropriate message, etc.
        }

    };

    return (
        <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl bg-white">
            <div className="mx-auto text-center">
                <h1 className="text-4xl text-gray-800">Register</h1>
                <p className="text-center text-sm text-gray-400 mt-4">Have an account ? <Link to={`/login`} className="font-semibold text-purple-600 hover:underline">Log in</Link></p>

            </div>
            <div className="flex items-center justify-around mt-2">
                {/* <div className="w-14 h-14 text-center rounded-full bg-blue-500 text-white saturate-200 transition-all hover:bg-blue-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-facebook-f fa-lg "></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-red-500 text-white saturate-100 transition-all hover:bg-red-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-google fa-lg"></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-indigo-500 text-white saturate-100 transition-all hover:bg-indigo-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-twitch fa-lg"></i>
                                </a>
                            </div>
                            <div className="w-14 h-14 text-center rounded-full bg-green-500 text-white saturate-100 transition-all hover:bg-green-600">
                                <a href="#" className="block mt-4">
                                    <i className="fab fa-line fa-lg"></i>
                                </a>
                            </div> */}
            </div>
            <div className="flex items-center my-6">
                {message &&
                    <>
                        <hr className="flex-1" />
                        <span className="px-4 text-lg text-lime-500"> <p>{message}</p></span>
                        <hr className="flex-1" />
                    </>
                }
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className='flex justify-between'>
                    <div className="relative">
                        <input
                            type="text"
                            className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600 border-solid text-sm"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">First Name</label>
                    </div>
                    <div className=" relative">
                        <input
                            type="text"
                            className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600 border-solid text-sm"
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">Last Name</label>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className="mt-10 relative">
                        <input
                            type="text"
                            className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600 border-solid text-sm"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">User Name</label>
                    </div>
                    <div className="mt-10 relative">
                        <input
                            type="email"
                            className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600 border-solid text-sm"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">Email</label>
                    </div>
                </div>
                <div className="mt-10 relative">
                    <input
                        type="password"
                        className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 placeholder-transparent focus:ring-0 focus:border-purple-600 border-solid text-sm"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="password" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">Password</label>
                </div>

                {/* <div className="mt-10">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-200/50" checked />
                                    <span className="ml-2 text-sm">Check here that you have agree to <a href="#" className="font-semibold text-purple-600 hover:underline">the terms.</a></span>
                                </label>
                            </div> */}
                <button type="submit" className="w-full mt-14 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none">Sign up</button>

            </form>
        </div>
    );
}

export default UserRegistrationForm;
