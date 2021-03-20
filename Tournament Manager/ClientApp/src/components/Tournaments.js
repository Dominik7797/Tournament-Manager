import React from 'react';
import axios from 'axios';

function Tournaments() {
    const getData = () => {
        axios.get("/tournamentApi").then(data => console.log(data.data));
    }

    return (
        <div>
            Tournaments
            <button onClick={getData}>TEST ME</button>
        </div>
    );
}

export default Tournaments;
