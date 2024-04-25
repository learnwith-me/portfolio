import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slice/authenticationSlice';
import RegisterModal from '../registration/RegisterModal'


const LoginForm = ({ closeLoginModal }) => {




    const dispatch = useDispatch(),
        auth = useSelector(state => state.auth);

    const formik = useFormik({
        // Initial values
        initialValues: {
            email: '',
            password: ''
        },

        // Validation Schema
        validationSchema: Yup.object({
            email: Yup.string().required().email(),
            password: Yup.string().required().min(4),
        }),

        // On Submit
        onSubmit: (data) => {
            // const {email, password} = data;

            dispatch(login(data));

        }
    });

    return (
        <div className="px-10 pt-4 pb-8 rounded-3xl shadow-xl bg-white">
            <div className="mx-auto text-center">
                <h1 className="text-4xl text-gray-800">Login</h1>
                <p className="text-center text-sm text-gray-400 mt-4">Create an Account
                    <spam className="font-semibold text-purple-600 hover:underline">
                        <RegisterModal closeLoginModal={closeLoginModal} openModal={false} regBtnText={`Register`} />
                    </spam>
                </p>

            </div>
            <div className="flex items-center justify-around mt-2">
            </div>
            <div className="flex items-center my-6">
                {auth.isError &&
                    <>
                        <hr className="flex-1" />
                        <span className="px-4 text-sm text-red-400"><p>{auth.isError}</p></span>
                        <hr className="flex-1" />
                    </>
                }
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="relative">
                    <input
                        type="email"
                        className="peer w-full px-0.5 border-0 border-b-2 border-solid border-gray-300 text-sm placeholder-transparent focus:ring-0 focus:border-purple-600"
                        name="email"
                        autoFocus
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        required
                    />
                    <label htmlFor="email" className="absolute left-0 top-[-5px] text-gray-600 text-sm focus-visible:border-0">Email</label>
                </div>
                <div className="mt-10 relative">
                    <input
                        type="password"
                        name="password"
                        className="peer w-full px-0.5 border-0 border-b-2 border-gray-300 border-solid placeholder-transparent text-sm focus:ring-0 focus:border-purple-600"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        required
                    />
                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm focus-visible:border-0">Password</label>
                </div>
                {/* <div className="mt-10">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:border-purple-300 focus:ring focus:ring-offset-0 focus:ring-purple-200/50" checked />
                                    <span className="ml-2 text-sm">Check here that you have agree to <a href="#" className="font-semibold text-purple-600 hover:underline">the terms.</a></span>
                                </label> disabled={auth.isLoading}
                            </div> */}
                <button type="submit" className="w-full mt-14 py-4 text-lg text-white font-semibold text-center rounded-full bg-purple-500 transition-all hover:bg-purple-600 focus:outline-none disabled:bg-blue-300 disabled:text-slate-100 disabled:cursor-wait">Login</button>


            </form>

        </div>
    )
}

export default LoginForm