import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-base-100 shadow-md p-4 relative">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-xl font-nico font-bold">Tour Buddy</a>

                <ul className="hidden lg:flex space-x-6">
                    <li><a href="#" className="hover:text-gray-700">Home</a></li>
                    <li><a href="#" className="hover:text-gray-700">About Us</a></li>
                    <li><a href="#" className="hover:text-gray-700">Our Most Rated Guides</a></li>
                    <li><a href="#" className="hover:text-gray-700">Our Packages</a></li>
                    <li><a href="#" className="hover:text-gray-700">Most Desired Places</a></li>
                </ul>

                {/* Mobile Menu Icon */}
                <button className="lg:hidden text-xl z-50" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>

                <a className="hidden lg:block bg-[#FFDA32] px-7 py-2 rounded-lg font-bold">Sign In</a>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`} 
                onClick={() => setIsOpen(false)}
            ></div>

            <ul className={`fixed top-0 left-0 w-3/4 h-full bg-white z-50 shadow-lg p-5 space-y-4 flex flex-col items-start transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}>
                <button 
                    className="text-2xl self-end mr-4 mt-2"
                    onClick={() => setIsOpen(false)}
                >
                    ✖
                </button>
                <li><a href="#" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="#" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>About Us</a></li>
                <li><a href="#" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Our Most Rated Guides</a></li>
                <li><a href="#" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Our Packages</a></li>
                <li><a href="#" className="block hover:text-gray-700" onClick={() => setIsOpen(false)}>Most Desired Places</a></li>
                <li><a className="bg-[#FFDA32] px-7 py-2 rounded-lg block text-center font-bold" onClick={() => setIsOpen(false)}>Sign In</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
