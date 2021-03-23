import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/MainPageCSS.css'

function Home() {

    return (
        <div className="mainPage">
            <div className="top">
                <p className="mainTitle">TOURNAMENT MANAGER</p>
                <div className="linkContainer">
                    <Link to='/tournament-create' className="btnCreateTournament">Create Tournament</Link>
                    <Link to='/tournaments' className="btnCreateTournament">Join Tournament</Link>
                </div>
            </div>
            <div className="middle">
                I am Middle
            </div>
            <div className="bottom">
                I am Bottom
            </div>
        </div>
    );
}

export default Home;
