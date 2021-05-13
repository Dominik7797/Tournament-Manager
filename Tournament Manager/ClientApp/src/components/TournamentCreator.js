import React, { useState } from 'react'
import axios from 'axios';
import '../css/AuthFormsCSS.css';

function TournamentCreator() {

    const [statusCode, setStatusCode] = useState([]);

    const createTournament = (event) => {
        let tournamentName = event.target.tournamentName.value;
        let tournamentSize = event.target.tsize.value;
        let tournamentBracketSize = event.target.ttsize.value;
        let password = event.target.password.value;
        let datetime = event.target.applytime.value;
        let type = event.target.Typeselect.value;

        if (password.length == 0) {
            password = "0";
        }
        axios.post(`/Tournament-create/tournamentName=${tournamentName}&password=${password}&type=${type}`)
            .then(data => {
                setStatusCode(data.status);
            }
        )
    }

    

    return (
        <div className="mainDiv">
            <form method="POST" onSubmit={createTournament}>
                <div id="container">
                    <div id="left">
                    </div>
                    <div id="right">
                        <h1 id="mainTitleRight">Tournament Creator</h1><br></br>
                        <label htmlFor="tname">Tournament Name</label>
                        <input className="client-info" type="text" id="tname" name="tName" placeholder="Tournament name.." required />
                        <label htmlFor="password">Password</label>
                        <input className="client-info" type="text" id="password" name="password" placeholder="Password (optional)" />
                        <label htmlFor="Typeselect">Select tournament type</label>
                        <select className="client-info" id="Typeselect" name="Typeselect" required>
                            <option name="Tennis" value="Tennis">Tennis</option>
                            <option name="Football" value="Football">Football</option>
                            <option name="Basketball" value="Basketball">Basketball</option>
                        </select>
                        <input type="submit" id="submit" class="client-info" value="Create" />
                    </div>
                </div>

            </form>
        </div>

    );
}

export default TournamentCreator;
