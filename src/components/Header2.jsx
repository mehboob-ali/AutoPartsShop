import React from 'react'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs'
function Header2() {
const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
    <header className=' md:flex grid grid-cols-1 items-center justify-between p-2 bg-gray-800 text-gray-300  '>
      <h1 className=' lg:text-3xl text-center text-2xl py-2 '>Auto Parts Shop</h1>
      <div className=' space-x-2  flex items-center'>
        <input type='search' name='search' className=' text-lg w-full bg-gray-700 p-2 border border-black rounded-xl'
          placeholder=' search by brand, vehicle, part name'>
          
        </input>
        <BsSearch className=' text-4xl hover:text-5xl'></BsSearch>
        
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
      


      

      <div className=' hidden md:text-2xl text-lg md:flex items-center justify-center space-x-2 p-2'>
        <BsFillTelephoneFill></BsFillTelephoneFill>
        <a href='tel:+91 123456789'>+91 123456789</a>
      </div>

      
    </header>
                {/* Desktop Menu */}
        <div className=' divide-y-4 hidden md:block divide-gray-700 w-full h-0.5'>
                <div>
                    <span className=' '></span>
                </div>
            <nav>
                <ul className=' text-2xl text-gray-300 bg-gray-800 flex justify-center space-x-12 p-2 '>
                    <a href='/services'><li className=' hover:underline'>Services</li></a>  
                    <a href='/about'><li className=' hover:underline'>About</li></a>
                    <a href='/contact'><li className=' hover:underline'>Contact us</li></a>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Header2