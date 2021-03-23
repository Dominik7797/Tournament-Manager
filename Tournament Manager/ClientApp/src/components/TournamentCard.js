import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentCard(props) {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        joinedPlayers();
    }, []);

    const id = props.tournament.id;

    const cardStyling = {
        width: "350px",
        height: "215px",
        display: "inline-block",
        borderStyle: "solid",
        borderRadius: "30px",
        margin: "20px",
        padding: "5px",
        backgroundColor: "#2a2b2dff",
        color: "white"
    }

    const joinedPlayers = () => {
        axios.get('/contestants/' + id).then(data => setPlayers((data.data).length));
    }

    return (
        <div className="tournamentCard" style={cardStyling}>
            <div style={{ height: "80px" }}>Tournament name: {props.tournament.name}</div>
            <div style={{ height: "45px" }}><p>Tournament size: {props.tournament.size}/{players}</p></div>
            <div style={{ height: "45px" }}><p>Applytime: {props.tournament.applyTime}</p></div>
        </div>
    );
}

export default TournamentCard;