import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/contact', { name, email, message });
            alert('Message sent!');
            // Reset form fields
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div>
            <img src="/images/contact.jpg" alt="Contact" className="w-full h-auto mb-4" />
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-8">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <input type="text" placeholder="Your Name" className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Your Email" className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Your Message" className="border p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;