import React from 'react'
import Logo  from '../img/logo.png';

const footer = () => {
  return (
    <div>
        <footer class="text-gray-600 body-font bg-card">
            <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a href class="flex title-font font-medium items-center md:justify-start justify-center text-headingColor">
                        <img src={Logo} className='w-12 object-cover' alt="logo" />
                        <span class="ml-3 text-xl">Reperio</span>
                    </a>
                <p class="mt-2 text-sm text-gray-500">We provide information about New events in your town at the tip of your fingertips</p>
                </div>
                <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">

                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="font-semibold text-headingColor tracking-widest text-sm mb-3"></h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800"> </a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800"> </a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800"> </a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800"> </a>
                            </li>
                        </nav>
                    </div>

                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="font-semibold text-headingColor text-sm mb-3">Events</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">DJ's</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">New Offers</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">Offers</a>
                            </li>
                        </nav>
                    </div>

                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="font-semibold text-headingColor text-sm mb-3">Article</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">New Article</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">Popular Article</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">Most Read</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">Tips and Tricks</a>
                            </li>
                        </nav>
                    </div>
                    
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 class="font-semibold text-headingColor text-sm mb-3">Contact</h2>
                        <nav class="list-none mb-10">
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">IMCC</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">{`(020) 555-1001`}</a>
                            </li>
                            <li>
                                <a href class="text-gray-600 hover:text-gray-800">reperio@imcc.com</a>
                            </li>
                        </nav>
                    </div>
    {/* <div className="absolute bottom-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70  "></div>
    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 "></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div> */}

                </div>
            </div>
<div class="bg-[url('../public/nl.png')]">.</div>
        </footer>
    </div>
  )
}

export default footer