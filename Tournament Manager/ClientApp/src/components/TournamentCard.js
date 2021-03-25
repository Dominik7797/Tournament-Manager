import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/TournamentCardCSS.css'

function TournamentCard(props) {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        joinedPlayers();
    }, []);

    const id = props.tournament.id;

    const joinedPlayers = () => {
        axios.get('/contestants/' + id).then(data => setPlayers((data.data).length));
    }

    return (
        <div class="tournaments-container">
            <div class="tournament">
                <div class="tournament-preview">
                    <h6>Tournament type:</h6>
                    <h2>JavaScript Fundamentals</h2>
                </div>
                <div class="tournament-info">
                    <div class="tournament-container">
                        <span class="progress-text">
                            Tournament size: {props.tournament.size}/{players}
				</span>
                    </div>
                    <h6>Tournament name:</h6>
                    <h2>{props.tournament.name}</h2>
                    <button class="btn">Continue</button>
                </div>
            </div>
        </div>
    );
}

export default TournamentCard;