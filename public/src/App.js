import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Home from '../components/Home'; // Ensure you have a Home component

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={ContactForm} />
                {/* Add more routes as needed */}
            </Switch>
            <footer className="bg-blue-600 text-white p-6 text-center">
                <p>&copy; 2023 Hanalei Surf School. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;