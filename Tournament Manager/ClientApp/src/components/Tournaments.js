import React, { useState, useEffect} from 'react';
import axios from 'axios';
import TournamentCard from './TournamentCard';

function Tournaments() {
    const [tournaments, setTournaments] = useState([]);

    const getData = () => {
        axios.get("/tournamentApi").then(data => setTournaments(data.data));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {tournaments.map(tournament => <TournamentCard tournament={tournament} />)}
        </div>
    );
}

export default Tournaments;
