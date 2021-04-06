import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentBracket() {
    const url = new URL(window.location.href);
    const tournamentId = url.searchParams.get('id');

    const [tournament, setTournament] = useState([])
    const [brackets, setBrackets] = useState([])

    useEffect(() => {
        getTournamentById();
        generateBrackets();
    }, [])

    const getTournamentById = () => {
        axios.get('/tournament/' + tournamentId).then(tournament => {
            setTournament(tournament.data)
        })
    }
    return (
            <ul className="list-group" style={{ position: 'absolute', textAlign: 'left' }}>
                <li className="list-group-item" style={{ fontSize: '20px' }}><strong>Title: </strong> {tournament.name}</li>
                <li className="list-group-item" style={{ fontSize: '20px' }}><strong>Size: </strong> : {tournament.size}</li>
                <li className="list-group-item" style={{ fontSize: '20px' }}><strong>Start: </strong> : {tournament.startDate}</li>
            </ul>
    );
}

export default TournamentBracket;