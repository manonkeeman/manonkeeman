import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../assets/Navbar/Navbar.jsx';
import './Home.css';
import ManonVintage from '/src/assets/Pics/ManonVintage.jpg';

const boxes = [
    { title: 'Villa Vredestein Application', tag: 'Coding', date: '20 april', color: 'red' },
    { title: 'Webdesign Acupunctuur by Saskia', tag: 'Design', date: 'januari 2023', color: 'yellow' },
    { title: 'Reisverhalen Taipei-Taiwan', tag: 'Journal', date: 'november 2024', color: 'blue' },
    { title: 'Interview: Daan Dekker - De Betonnen Droom', tag: 'Journal', date: 'februari 2015', color: 'blue' },
    { title: 'Debutroman spoiler -Het Bijlmermeisje', tag: 'Journal', date: 'september 2016', color: 'blue' },
    { title: 'Reisverhalen Duik onder in Buenos Aires', tag: 'Journal', date: 'februari 2017', color: 'blue' },
    { title: 'Reisverhalen Bangalore - Het Silicon Valley in India', tag: 'Journal', date: 'november 2019', color: 'blue' },
    { title: 'Luchtvaartfamilie - Up in the sky Interview', tag: 'Journal', date: 'september 2020', color: 'blue' },
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
                    <Navbar />
                </div>

                <div className="box-container">
                    {boxes.map((box, index) => {
                        let link = null;

                        if (index === 0) link = "/coding";
                        else if (index === 1) link = "/design";
                        else if (box.tag === "Journal") link = "/journal";

                        const BoxInner = (
                            <div className="box-content">
                                <div className="box-header">
                                    <span className={`box-tag ${box.color}`}>{box.tag}</span>
                                    <span className="box-date">{box.date}</span>
                                </div>
                                <h2 className="box-title">{box.title}</h2>
                            </div>
                        );

                        return (
                            <div key={index} className="box">
                                {link ? (
                                    <Link to={link} style={{ width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }}>
                                        {BoxInner}
                                    </Link>
                                ) : (
                                    BoxInner
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;