import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TournamentCard(props) {

    return (
        <div>
            {props.tournament.name}
        </div>
    );
}

export default TournamentCard;