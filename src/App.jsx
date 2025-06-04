import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Coding from './pages/Coding';
import Design from './pages/Design';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import './Styles.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/coding" element={<Coding />} />
                        <Route path="/design" element={<Design />} />
                        <Route path="/journal" element={<Journal />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;