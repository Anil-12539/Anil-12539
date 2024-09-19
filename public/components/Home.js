import React from 'react';
import { motion } from 'framer-motion';

const Home = () => (
    <div>
        <motion.section
            className="hero bg-cover bg-center h-96"
            style={{ backgroundImage: "url('path/to/hero-image.jpg')" }} // Replace with your image path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <h2 className="text-4xl text-white font-bold">Book a Lesson for Your Trip Today!</h2>
            </div>
        </motion.section>
        {/* Other sections like services, testimonials, etc. */}
    </div>
);

export default Home;

