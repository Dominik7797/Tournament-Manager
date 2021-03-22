import React, { useState } from 'react'
import axios from 'axios';
import '../css/TournamentCreatorCSS.css'

function TournamentCreator() {
    const createTournament = (event) => {
        let tournamentName = event.target.tournamentName.value;
        let tournamentSize = event.target.tsize.value;
        let tournamentBracketSize = event.target.ttsize.value;
        let password = event.target.password.value;
        let datetime = event.target.applytime.value;

        if (password.length == 0) {
            password = "0";
        }
        axios.post(`/Tournament-create/tournamentName=${tournamentName}&tsize=${tournamentSize}&ttsize=${tournamentBracketSize}&password=${password}&applytime=${datetime}`)
    }

    return (
        <form className="creatorForm" onSubmit={createTournament}>
                <label htmlFor="tname">Tournament Name</label>
                <input type="text" id="tname" name="tournamentName" placeholder="Tournament name.."/>
                <label htmlFor="tsize">Tournament Size</label>
                <input type="text" id="tsize" name="tsize" placeholder="Tournament maximum player size eg. 30" />
                <label htmlFor="ttsize">Tournament Team Size</label>
                <input type="text" id="ttsize" name="ttsize" placeholder="Tournament maximum player/team size eg. 3" />
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" placeholder="Password (optional)" />
                <label htmlFor="applytime">How long till players can apply</label>
                <input type="text" id="applytime" name="applytime" placeholder="eg. 2021-03-29" />
                <input className="createTournamentBtn" type="submit" value="Create Tournament"/>
            </form>
    );
}

export default TournamentCreator;
