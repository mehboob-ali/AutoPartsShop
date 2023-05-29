import React from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";


function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className=' bg-gradient-to-r from-gray-800 to-gray-700'>
      <header className=' md:grid grid-cols-1 items-center justify-evenly p-2 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 
            divide-y-2 pt-2 divide-gray-700 w-full gap-2'>

        <div className=' md:grid grid-cols-3'>
         <Link to={'/'}>
          <h1 className=' lg:text-3xl md:text-left text-center text-2xl '>Chand Show Parts</h1>
          </Link>
          <div className=' space-x-2  flex items-center'>
            <input type='search' name='search' className=' text-lg w-full bg-gray-700 p-2 border border-black rounded-xl'
              placeholder=' search by brand, vehicle, part name'>

            </input>
            <BsSearch className=' text-3xl md:text-4xl hover:text-4xl md:hover:text-5xl '></BsSearch>

            {/* {/* <!-- Mobile menu button 2--> */}

            <div className=" flex text-gray-700 items-center justify-end px-4 border-b border-gray-700 py-6 md:hidden pl-4">
              <nav>
                <section className="MOBILE-MENU flex ">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)}
                  >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
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
            </div>

          </div>
          <div className=' hidden md:text-2xl  text-lg md:flex items-center justify-end space-x-2 p-2'>
            <BsFillTelephoneFill></BsFillTelephoneFill>
            <a href='tel:+91 123456789'>+91 123456789</a>
          </div>
        </div>

        {/* Desktop Menu  */}

        <div className=' pt-1 hidden md:block'>
          <nav className=' '>
            <ul className=' text-2xl text-gray-300 flex items-center justify-center space-x-12 '>
              <a href='/services'><li className=' hover:underline'>Services</li></a>
              <a href='/about'><li className=' hover:underline'>About</li></a>
              <a href='/contact'><li className=' hover:underline'>Contact us</li></a>
              <Link to={'/AddData'}>
                <li className=' bg-gray-300 p-2 animate-pulse rounded-lg text-gray-800'>
                  Add New</li>
              </Link>
            </ul>
          </nav>
        </div>

        <div className=' md:hidden text-center pt-3 pb-1'>
          <Link to='/AddData' className=' text-xl bg-gray-300 p-2 animate-pulse rounded-lg text-gray-800'>Add New</Link>
        </div>

      </header>
      <Outlet />
      <div className=' h-96 p-16'>
        <p className=' text-center text-lg text-gray-300 items-center justify-center'>All rights Reserved</p>
      </div>
    </div>
  )
}

export default Header