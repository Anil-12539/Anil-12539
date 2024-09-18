import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Hanalei Surf School</h1>
                <div>
                    <Link to="/" className="text-white px-4 hover:underline">Home</Link>
                    <Link to="/services" className="text-white px-4 hover:underline">Services</Link>
                    <Link to="/contact" className="text-white px-4 hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;