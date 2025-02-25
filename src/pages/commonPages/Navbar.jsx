import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-base-100 shadow-md p-4">
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
                <button className="lg:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
                </button>

         
                <a className="hidden lg:block bg-[#FFDA32] px-7 py-2 rounded-lg">Button</a>
            </div>
            
            {/* Mobile Menu */}
            {isOpen && (
                <ul className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md p-5 space-y-4">
                    <li><a href="#" className="block hover:text-gray-700">Home</a></li>
                    <li><a href="#" className="block hover:text-gray-700">About Us</a></li>
                    <li><a href="#" className="block hover:text-gray-700">Our Most Rated Guides</a></li>
                    <li><a href="#" className="block hover:text-gray-700">Our Packages</a></li>
                    <li><a href="#" className="block hover:text-gray-700">Most Desired Places</a></li>
                    <li><a className="bg-[#FFDA32] px-7 py-2 rounded-lg block text-center">Sign In</a></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
