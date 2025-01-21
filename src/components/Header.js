import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <header className="bg-gray-800 w-full h-[80px] flex justify-end items-center p-4 text-white fixed top-0 right-0 left-0 z-50 mr-8"> 
      <ul className="flex space-x-4">
        <li className="list-none text-lg font-bold mx-2 px-2 cursor-pointer transform transition-transform duration-200 hover:scale-110"><Link to="/">Home</Link></li>
        <li className="list-none text-lg font-bold mx-2 px-2 cursor-pointer transform transition-transform duration-200 hover:scale-110"><Link to="/about">About</Link></li>
        <li className="list-none text-lg font-bold mx-2 px-2 cursor-pointer transform transition-transform duration-200 hover:scale-110"><Link to="/skills">Skills</Link></li>
        {/* <li className="list-none text-lg font-medium mx-2  px-2 cursor-pointer transform transition-transform duration-200 hover:scale-110"><Link to="/achievements">Achievements</Link></li> */}
        <li className="list-none text-lg font-bold mx-2 px-2 cursor-pointer transform transition-transform duration-200 hover:scale-110"><Link to="contacts">Contacts</Link></li>
      </ul>
    </header>
  );
};

export default Header;