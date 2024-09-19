import React from 'react';
import './App.css'; // Import CSS module
import heroVideo from './assets/hero-video.mp4'; // Optimized video
import serviceImage1 from './assets/private-lessons.jpg'; // Optimized image
import serviceImage2 from './assets/group-lessons.jpg'; // Optimized image
import serviceImage3 from './assets/rentals.jpg'; // Optimized image

function App() {
    return (
        <div className="bg-white text-gray-800">
            <header className="bg-blue-600 text-white p-6">
                <nav className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Hanalei Surf School</h1>
                    <ul className="flex space-x-4">
                        <li><a href="#services" className="hover:underline">Services</a></li>
                        <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
                        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="#faq" className="hover:underline">FAQ</a></li>
                        <li><a href="#contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
                <p className="text-lg">Surf & Paddle Board Lessons and Rentals | Hanalei Bay, HI</p>
            </header>
            <main className="container mx-auto p-6">
                <section className="hero relative">
                    <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                        <h2 className="text-4xl text-white">Book a Lesson for Your Trip Today!</h2>
                        <a href="#contact" className="bg-blue-600 text-white p-2 rounded ml-4 hover:bg-blue-700 transition">Get Started</a>
                    </div>
                </section>
                <section id="services" className="services my-12">
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                            <img src={serviceImage1} alt="Private Lessons" className="w-full h-32 object-cover rounded-t-lg" />
                            <h3 className="font-bold">Private Lessons</h3>
                            <p>One-on-one instruction tailored to your skill level.</p>
                            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                            <img src={serviceImage2} alt="Group Lessons" className="w-full h-32 object-cover rounded-t-lg" />
                            <h3 className="font-bold">Group Lessons</h3>
                            <p>Learn with friends and family in a fun environment.</p>
                            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
                            <img src={serviceImage3} alt="Rentals" className="w-full h-32 object-cover rounded-t-lg" />
                            <h3 className="font-bold">Rentals</h3>
                            <p>Surfboards and paddleboards available for rent.</p>
                            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
                        </div>
                    </div>
                </section>
                <section id="why-choose-us" className="my-12">
                    <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Experienced and certified instructors.</li>
                        <li>Personalized lessons for all skill levels.</li>
                        <li>Fun and safe learning environment.</li>
                        <li>Beautiful location in Hanalei Bay.</li>
                    </ul>
                </section>
                <section id="gallery" className="my-12">
                    <h2 className="text-2xl font-semibold">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <img src="public/Serviceimages/gallary1.jpg" alt="Gallery Image 1" className="w-full h-48 object-cover rounded-lg" />
                        <img src="public/Serviceimages/gallary2.jpg" alt="Gallery Image 2" className="w-full h-48 object-cover rounded-lg" />
                        <img src="public/Serviceimages/gallary3.jpg" alt="Gallery Image 3" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                </section>
                <section id="testimonials" className="testimonials my-12">
                    <h2 className="text-2xl font-semibold">Testimonials</h2>
                    <div className="slick-carousel">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <blockquote>
                                <p>"Best surf school in Hanalei! Highly recommend!"</p>
                                <footer>- Happy Customer</footer>
                            </blockquote>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <blockquote>
                                <p>"Amazing experience! The instructors were fantastic."</p>
                                <footer>- Satisfied Surfer</footer>
                            </blockquote>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <blockquote>
                                <p>"A must-do when in Hanalei! Great fun!"</p>
                                <footer>- Thrilled Tourist</footer>
                            </blockquote>
                        </div>
                    </div>
                </section>
                <section id="faq" className="my-12">
                    <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold">What should I bring to my lesson?</h3>
                            <p>Bring sunscreen, a towel, and a swimsuit. We provide the rest!</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold">Do I need prior experience?</h3>
                            <p>No prior experience is necessary! Our instructors will guide you through everything.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h3 className="font-bold">What is your cancellation policy?</h3>
                            <p>We require a 24-hour notice for cancellations to avoid charges.</p>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact my-12">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <form className="bg-white shadow-lg rounded-lg p-4">
                        <input type="text" placeholder="Your Name" className="border p-2 w-full mb-4" required />
                        <input type="email" placeholder="Your Email" className="border p-2 w-full mb-4" required />
                        <select className="border p-2 w-full mb-4" required>
                            <option value="" disabled selected>Select Inquiry Type</option>
                            <option value="lesson">Lesson Inquiry</option>
                            <option value="rental">Rental Inquiry</option>
                            <option value="general">General Inquiry</option>
                        </select>
                        <textarea placeholder="Your Message" className="border p-2 w-full mb-4" required></textarea>
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">Send Message</button>
                    </form>
                </section>
            </main>
            <footer className="bg-blue-600 text-white p-6 text-center">
                <p>&copy; 2024 Hanalei Surf School. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:underline"><i className="fab fa-facebook"></i></a>
                    <a href="#" className="text-white hover:underline"><i className="fab fa-instagram"></i></a>
                    <a href="#" className="text-white hover:underline"><i className="fab fa-twitter"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default App;