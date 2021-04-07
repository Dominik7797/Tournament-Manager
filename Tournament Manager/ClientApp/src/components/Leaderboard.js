import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Leaderboard() {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        getLeaderboard();
    }, []);

    const getLeaderboard = () => {
        axios.get("/leaderboardContext").then(data => {
            console.log(data.data)
        })
    }


    return (
        <div>
            Leaderboard
        </div>
    );
}

export default Leaderboard;
