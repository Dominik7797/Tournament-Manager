import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import TournamentCard from './TournamentCard';
import axios from 'axios';
import '../../src/css/MainPageCSS.css';

function Home() {
    const [tournaments, setTournaments] = useState([]);

    const getData = () => {
        axios.get("/tournamentApi").then(data => setTournaments(data.data));
    }

    useEffect(() => {
        getData();
    }, []);

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
                <p className="mainTitleMiddle">FEATURED TOURNAMENTS</p>
                <div className="tournamentCards">{tournaments.map(tournament => <TournamentCard tournament={tournament} />)}</div>
            </div>
        </div>
    );
}

export default Home;
