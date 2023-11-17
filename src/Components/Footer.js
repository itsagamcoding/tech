import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2699fb] py-16 px-8">
      <div className="grid lg:grid-cols-4 gap-[40px]">
        <div className="lg:col-span-2">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">AGAM TECH</h1>
          <p className="py-4 sm:text-xl text-justify text-gray-300">
            Join us on the path to tech mastery, where each course is a step
            toward unlocking your full potential in the ever-evolving world of
            technology
          </p>
          <div className="flex justify-evenly w-[90%] sm:w-[40%] lg:w-[70%] my-6">
            <FaFacebookSquare size={50} className="text-gray-300" />
            <FaInstagram size={50} className="text-gray-300" />
            <FaTwitterSquare size={50} className="text-gray-300" />
            <FaGithubSquare size={50} className="text-gray-300" />
          </div>
        </div>
        <div className="lg:col-span-2 flex flex-wrap justify-between gap-4 mt-6">
          <div>
            <h6 className="font-medium text-black md:text-2xl border-b p-1">
              Solutions
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Analytics</li>
              <li className="py-2 text-lg text-gray-200">Marketing</li>
              <li className="py-2 text-lg text-gray-200">Commerce</li>
              <li className="py-2 text-lg text-gray-200">Insights</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black md:text-2xl border-b p-1">
              Support
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Pricing</li>
              <li className="py-2 text-lg text-gray-200">Documentation</li>
              <li className="py-2 text-lg text-gray-200">Guides</li>
              <li className="py-2 text-lg text-gray-200">API Status</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black md:text-2xl border-b p-1">
              Company
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">About</li>
              <li className="py-2 text-lg text-gray-200">Blog</li>
              <li className="py-2 text-lg text-gray-200">Jobs</li>
              <li className="py-2 text-lg text-gray-200">Press</li>
              <li className="py-2 text-lg text-gray-200">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-black md:text-2xl border-b p-1">
              Legal
            </h6>
            <ul>
              <li className="py-2 text-lg text-gray-200">Claim</li>
              <li className="py-2 text-lg text-gray-200">Policy</li>
              <li className="py-2 text-lg text-gray-200">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
