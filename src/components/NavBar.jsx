//import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return ( 
    <div className="">
      <header className="bg-gray-900 border-b border-gray-700 fixed min-w-full">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center -m-2 xl:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-white bg-gray-900 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <div className="flex ml-6 mr-auto xl:ml-0">
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-2xl text-white font-bold">React By Charmaine</h1>
              </div>

              <div className="hidden sm:-my-px sm:ml-8 xl:flex xl:space-x-10">
               <Link
                 to="/"
                  title=""
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white transition-all duration-200 border-b-2 border-white"
                >
                  {" "}
                  Dashboard{" "}
                </Link>

               <Link
                 to="/analytics"
                  title=""
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 transition-all duration-200 border-b-2 border-transparent hover:border-gray-200 hover:text-white"
                >
                  {" "}
                  Analytics{" "}
                </Link>

               <Link
                 to="/products"
                  title=""
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 transition-all duration-200 border-b-2 border-transparent hover:border-gray-200 hover:text-white"
                >
                  {" "}
                  Products{" "}
                </Link>

               <Link
                 to="/customers"
                  title=""
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 transition-all duration-200 border-b-2 border-transparent hover:border-gray-200 hover:text-white"
                >
                  {" "}
                  Customers{" "}
                </Link>

               <Link
                 to="/support"
                  title=""
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 transition-all duration-200 border-b-2 border-transparent hover:border-gray-200 hover:text-white"
                >
                  {" "}
                  Support{" "}
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="flex-1 hidden max-w-xs ml-auto lg:block">
                <label htmlFor="" className="sr-only">
                  {" "}
                  Search{" "}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>

                  <input
                    type="search"
                    name=""
                    id=""
                    className="block w-full py-2 pl-10 text-white placeholder-gray-400 bg-gray-900 border-gray-600 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Search here"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-6 sm:ml-5">
                <div className="relative">
                  <button
                    type="button"
                    className="p-1 text-gray-200 transition-all duration-200 bg-gray-900 rounded-full hover:text-white focus:outline-none hover:bg-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                  <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-500 text-white">
                    {" "}
                    2{" "}
                  </span>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    className="p-1 text-gray-200 transition-all duration-200 bg-gray-900 rounded-full hover:text-white focus:outline-none hover:bg-gray-700"
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                  <span className="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-500 text-white">
                    {" "}
                    6{" "}
                  </span>
                </div>

                <button
                  type="button"
                  className="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900"
                >
                  <img
                    className="object-cover bg-gray-300 rounded-full w-9 h-9"
                    src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/horizontal-menu/3/avatar-male.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
