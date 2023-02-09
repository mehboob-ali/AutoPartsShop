import React from 'react'
import { useState } from 'react';
function Navbar() {
const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div>
            {/* Desktop Menu */}
        {/* <div className=' divide-y-4 hidden md:block divide-gray-700 w-full h-1'>
                <div>
                    <span className=' '></span>
                </div>
            <nav>
                <ul className=' text-2xl flex justify-center space-x-12 p-2 '>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div> */}
    {/* <!-- Mobile menu button -->
// <div className="md:hidden flex items-center">
// 	<button className="outline-none mobile-menu-button">
// 		<svg
// 			className="w-6 h-6 text-gray-500"
// 			xShow="!showMenu"
// 			fill="none"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 			strokeWidth="2"
// 			viewBox="0 0 24 24"
// 			stroke="currentColor"
// 		>
// 		<path d="M4 6h16M4 12h16M4 18h16"></path>
// 		</svg>
// 	</button>
// </div> */}


    {/* {/* <!-- Mobile menu button 2--> */}
{/* 
    <div className="flex items-center justify-end px-4 border-b border-gray-700 py-6 md:hidden">

      <nav>
        <section className="MOBILE-MENU flex ">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-700"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-xl hover:text-2xl">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/services">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>


      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div> */}

    </div>
  )
}

export default Navbar