import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
             
            <section class="relative w-full h-full py-40 min-h-screen">
                <div class="absolute top-0 w-full h-full bg-gray-800 bg-no-repeat bg-full " style={{ backgroundImage: "url(https://demos.creative-tim.com/notus-react/static/media/register_bg_2.4f2cb0ac.png)" }}></div>
                <div className="container mx-auto px-4 h-full my-10">
                    <div className="flex content-center items-center justify-center h-full">
                        <div className="w-full lg:w-4/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                                <div className="rounded-t mb-0 px-6 py-6">
                                    <div className="text-center mb-3">
                                        <h6 className="text-gray-500 text-sm font-bold">
                                            Sign In
                                        </h6>
                                    </div>
                                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form>
                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="grid-password"
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Password"
                                            />
                                        </div>

                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6 relative">
                                <div className="w-1/2">
                                    <a
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                        className="text-gray-200"
                                    >
                                        <small>Forgot password?</small>
                                    </a>
                                </div>
                                <div className="w-1/2 text-right">
                                    <Link to="" className="text-gray-200">
                                        <small>Create new account</small>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
