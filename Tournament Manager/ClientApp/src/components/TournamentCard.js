import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/TournamentCardCSS.css'
import TennisImage from "../images/Tennis.jpg";
import FootballImage from "../images/football.jfif";
import BasketballImage from "../images/basketball.png";
import {
    Link
} from "react-router-dom";

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

    const touramentLink = `/tournament/tournament?id=${props.tournament.id}`

    return (
        <div className="tournaments-container" style={{display:"inline-block"}}>
            <div className="tournament">
                <div className="tournament-preview" style={{ backgroundImage: `url(${typeImg})`}}>
                    <h6>Tournament type:</h6>
                    <h2>{props.tournament.tournamentType}</h2>
                </div>
                <div className="tournament-info">
                    <div className="tournament-container">
                        <span className="progress-text">
                            Tournament size: {props.tournament.size}/{players}
				</span>
                    </div>
                    <h6>Tournament name:</h6>
                    <h2>{props.tournament.name}</h2>
                    <Link className="btn" to={touramentLink}>Apply</Link>
                </div>
            </div>
        </div>
    );
}

export default TournamentCard;