import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md">
            <div className="container mx-auto flex justify-end items-center p-4">
                <ul className="flex space-x-8">
                    <li>
                        <Link 
                            to="/signup" 
                            className="text-lg font-semibold hover:text-gray-100 transition duration-300 ease-in-out"
                        >
                            Sign Up
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/login" 
                            className="text-lg font-semibold hover:text-gray-100 transition duration-300 ease-in-out"
                        >
                            Login
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
