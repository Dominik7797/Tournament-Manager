import React, { useState } from 'react';
import '../css/MainPageCSS.css';

function Home() {

    const toggleClass = (event) => {
        event.target.classList.add('hover-left');
        console.log("works")
    };

    return (
        <div className="container">
            <div className="split left" onMouseEnter={toggleClass}>
                <div className="centered">
                    <h1 className="mainTitle">Join Tournament</h1>
                </div>
            </div>

            <div className="split right">
                <div className="centered">
                    <h2 className="mainTitle">Create Tournament</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;
