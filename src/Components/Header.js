import React, { useState } from 'react'
import {FiAlignJustify} from "react-icons/fi"
import {IoCloseCircleOutline} from "react-icons/io5";
import logo from '../Assets/logo.png'
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-[#2699fb] p-3">
      <div className="max-w-[1400px] py-2 flex items-center justify-between mx-auto">
        <div className="flex items-center gap-8">
          <div>
            <img
              src={logo}
              alt=""
              className="w-12 h-12 md:w-[8vw] md:h-[8vw]"
            />
          </div>
          <div className="text-xl md:text-[2vw] font-bold">AGAM TECH</div>
        </div>
        {show ? (
          <IoCloseCircleOutline
            onClick={() => setShow(!show)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <FiAlignJustify
            onClick={() => setShow(!show)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-10 lg:text-2xl text-white">
          <li>Home</li>
          <li>Resources</li>
          <li>Articles</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Responsive Menu Design */}

        <ul
          className={`duration-500 md:hidden block rounded fixed w-[40vw] py-8 top-0 ${
            show ? "left-0" : "left-[-100%]"
          } bg-black text-[4vw] text-white`}
        >
          <li className="p-5 text-gray-300 border-y-2 border-gray-500 bw">
            Home
          </li>
          <li className="p-5 text-gray-300 border-b-2 border-gray-500">
            Resources
          </li>
          <li className="p-5 text-gray-300 border-b-2 border-gray-500">
            Articles
          </li>
          <li className="p-5 text-gray-300 border-b-2 border-gray-500">
            About
          </li>
          <li className="p-5 text-gray-300 border-b-2 border-gray-500">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header
