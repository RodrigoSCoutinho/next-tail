import Link from "next/link"
import { useState } from "react"

export function Navbar() {
 
  
  const [active, setActive] = useState("nav__menu")
  const navToogle = () => {
    active === "nav__menu" 
    ? setActive("nav__menu nav__active") 
    : setActive("nav__men");

  };
   
  return (

    <>
      <nav className="bg-gray-800">
        <div className="px-2 mx-auto sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-ed-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0">
                {/* <img className="block w-auto h-8 lg:hidden" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          <img className="hidden w-auto h-8 lg:block" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"> */}
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <Link href="/">
                    <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white">
                      HOME
                    </a>
                  </Link>

                  <Link href="about">
                    <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white">
                      ABOUT
                    </a>
                  </Link>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://docs.google.com/document/d/1XT0fQcI7XrKEfZeERzsnI0JtlY5jqGZVABEx3VUIeC0/edit"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    GAME DESIGN
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="#Register">
                <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white">
                  PRE-REGISTER
                </a>
              </Link>

              {/* <!-- Profile dropdown --> */}

              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={navToogle}
                  >
                    <span className="sr-only">Open user menu</span>
                    {/* <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> */}
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}

                {/* <div className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
           
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
          </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 text-gray-300">
            <Link href="/">
              <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white">
                HOME
              </a>
            </Link>

            <Link href="about">
              <a className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white">
                ABOUT
              </a>
            </Link>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/1XT0fQcI7XrKEfZeERzsnI0JtlY5jqGZVABEx3VUIeC0/edit"
              className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 hover:text-white"
            >
              GAME DESIGN
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
