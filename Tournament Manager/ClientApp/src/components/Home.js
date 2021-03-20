import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/css/MainPageCSS.css'
import TournamentCreator from './TournamentCreator';

function Home() {

    return (
        <div className="mainPage">
            <p className="mainTitle">TOURNAMENT MANAGER</p>
            <div className="linkContainer">
                <Link to='/tournament-create' className="btnCreateTournament">Create Tournament</Link>
                <Link to='/tournaments' className="btnCreateTournament">Join Tournament</Link>
            </div>
        </div>
    );
}

export default Home;
