﻿import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/TournamentCardCSS.css'
import TennisImage from "../images/Tennis.jpg";
import FootballImage from "../images/football.jfif";
import BasketballImage from "../images/basketball.png";

function TournamentCard(props) {

    const [players, setPlayers] = useState([]);
    const [typeImg, setTypeImg] = useState([]);

    useEffect(() => {
        joinedPlayers();
        getTournamentPicture();
    }, []);

    const id = props.tournament.id;

    const joinedPlayers = () => {
        axios.get('/contestants/' + id).then(data => setPlayers((data.data).length));
    }

    const getTournamentPicture = () => {
        if (props.tournament.tournamentType == "Tennis") {
            setTypeImg(TennisImage);
        }else if (props.tournament.tournamentType == "Football") {
            setTypeImg(FootballImage);
        }else if (props.tournament.tournamentType == "Basketball") {
            setTypeImg(BasketballImage);
        }
    }

    return (
        <div class="tournaments-container" style={{display:"inline-block"}}>
            <div class="tournament">
                <div class="tournament-preview" style={{ backgroundImage: `url(${typeImg})`}}>
                    <h6>Tournament type:</h6>
                    <h2>{props.tournament.tournamentType}</h2>
                </div>
                <div class="tournament-info">
                    <div class="tournament-container">
                        <span class="progress-text">
                            Tournament size: {props.tournament.size}/{players}
				</span>
                    </div>
                    <h6>Tournament name:</h6>
                    <h2>{props.tournament.name}</h2>
                    <button class="btn">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default TournamentCard;