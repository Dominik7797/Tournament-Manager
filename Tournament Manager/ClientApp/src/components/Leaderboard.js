import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        getLeaderboard();
    }, []);

    const getLeaderboard = () => {
        axios.get("/leaderboardContext").then(data => {
            setLeaderboard(data.data)
        })
    }


    return (
        <div>
            {leaderboard.map(player => <div>{player.name}</div>)}
        </div>
    );
}

export default Leaderboard;
