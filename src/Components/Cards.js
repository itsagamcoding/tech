import React from "react";
import web_dev from "../Assets/web_dev.png";
import hacking from "../Assets/hacking.png";
import data_science from "../Assets/data_science.png";

const Cards = () => {
  return (
    <div className="w-full py-[7rem] px-4 bg-white">
      <div className="max-w-[1240px] w-[70%] md:w-[100%] mx-auto md:grid md:grid-cols-3 md:gap-8">
        {/* Card 1 */}

        <div className="w-full shadow-inner shadow-slate-600 flex flex-col p-4 rounded-lg hover:scale-110 duration-300 my-8 mb-[120px]">
          <img
            className="w-[150px] sm:w-[200px] md:w-[120px] md:h-[120px] mx-auto mt-[-4rem]"
            src={web_dev}
            alt="web dev"
          />
          <h2 className="text-xl lg:text-2xl font-bold text-center py-8">
            Web development
          </h2>
          <p className="text-center text-3xl lg:text-4xl font-bold">Rs 1999</p>
          <div className="text-center font-medium text-sm md:text-[13px] lg:text-[1vw]">
            <p className="py-4 border-b border-gray-400 mx-auto mt-8">
              From HTML to web frameworks
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Gateway to mastering the language of web
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Turn ideas into best websites with us!
            </p>
          </div>
          <button className="bg-[#00df9a] lg:w-[50%] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        {/* Card 2 */}

        <div className="w-full shadow-inner shadow-slate-600 bg-gray-100 flex flex-col p-4  my-8 rounded-lg hover:scale-110 duration-300 mb-[120px]">
          <img
            className="w-[100px] sm:w-[200px] md:w-[120px] md:h-[120px] mx-auto mt-[-4rem]"
            src={hacking}
            alt="Ethical Hacking"
          />
          <h2 className="text-xl lg:text-2xl font-bold text-center py-8">
            Ethical Hacking
          </h2>
          <p className="text-center text-3xl lg:text-4xl font-bold">Rs 1499</p>
          <div className="text-center font-medium text-sm md:text-[13px] lg:text-[1vw]">
            <p className="py-4 border-b border-gray-400 mx-auto mt-8">
              Hack with ethics digitally
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Your key to cybersecurity expertise awaits!
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Learn to defend, hack responsibly
            </p>
          </div>
          <button className="bg-black text-[#00df9a] lg:w-[50%] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>

        {/* Card 3 */}

        <div className="w-full shadow-inner shadow-slate-600 flex flex-col p-4 rounded-lg hover:scale-110 duration-300 my-8 mb-[120px]">
          <img
            className="w-[100px] sm:w-[200px] md:w-[120px] md:h-[120px] mx-auto mt-[-4rem] bg-white"
            src={data_science}
            alt="Data Science"
          />
          <h2 className="text-xl lg:text-2xl font-bold text-center py-8">
            Data Science
          </h2>
          <p className="text-center text-3xl lg:text-4xl font-bold">Rs 2499</p>
          <div className="text-center font-medium text-sm md:text-[13px] lg:text-[1vw]">
            <p className="py-4 border-b border-gray-400 mx-auto mt-8">
              Explore data and shape decisions
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Empower your future with data science skills!
            </p>
            <p className="py-4 border-b border-gray-400 mx-auto">
              Transform data into knowledge
            </p>
          </div>
          <button className="bg-[#00df9a] lg:w-[50%] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
