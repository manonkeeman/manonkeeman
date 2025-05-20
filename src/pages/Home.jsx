import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-bar"></div>
            <div className="content-wrapper">

                <div className="header">
                    <img src="/src/assets/Pics/ManonVintage.jpg" alt="Logo" className="logo" />

                    <div className="header-content">
                        <h1 className="name-title">Manon<br />Keeman</h1>
                        <p className="job-title">Full Stack Developer</p>
                    </div>

                    <nav className="sidebar-nav">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/work">Work</a></li>
                            <li><a href="/journal">Journal</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Container voor de boxen */}
                <div className="box-container">
                    <div className="box">Box 1</div>
                    <div className="box">Box 2</div>
                    <div className="box">Box 3</div>
                    <div className="box">Box 4</div>
                    <div className="box">Box 5</div>
                    <div className="box">Box 6</div>
                    <div className="box">Box 7</div>
                    <div className="box">Box 8</div>
                </div>
            </div>
        </div>
    );
};

export default Home;