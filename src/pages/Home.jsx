import React from 'react';
import './Home.css';
import ManonVintage from '/src/assets/Pics/ManonVintage.jpg';

const boxes = [
    { title: 'Villa Vredestein Application', tag: 'Work', date: '20 april' },
    { title: 'Webdesign Acupunctuur by Saskia', tag: 'Work', date: 'januari 2023' },
    { title: 'Reisverhalen Taipei-Taiwan', tag: 'Journal', date: 'november 2024 ' },
    { title: 'Interview: Daan Dekker - De Betonnen Droom', tag: 'Journal', date: 'februari 2015' },
    { title: 'Debutroman spoiler -Het Bijlmermeisje', tag: 'Journal', date: 'september 2016' },
    { title: 'Reisverhalen Duik onder in Buenos Aires', tag: 'Journal', date: 'februari 2017' },
    { title: 'Reisverhalen Bangalore - Het Silicon Valley in India', tag: 'Journal', date: 'november 2019' },
    { title: 'Luchtvaartfamilie - Up in the sky Interview', tag: 'Journal', date: 'september 2020' },
];

const Home = () => {
    return (
        <div className="home-container">
            <div className="top-bar"></div>
            <div className="content-wrapper">
                <div className="header">
                    <img src={ManonVintage} alt="Logo" className="logo" />
                    <div className="header-content">
                        <h1 className="name-title">Manon<br />Keeman</h1>
                        <p className="job-title">Full Stack Developer - Grafisch Ontwerper - Schrijver</p>
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

                <div className="box-container">
                    {boxes.map((box, index) => (
                        <div key={index} className="box">
                            <div className="box-content">
                                <div className="box-header">
                                    <span className="box-tag">{box.tag}</span>
                                    <span className="box-date">{box.date}</span>
                                </div>
                                <h2 className="box-title">{box.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;