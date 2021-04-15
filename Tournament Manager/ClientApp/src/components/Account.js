import React, { useState, useEffect } from 'react';

function Account(props){
    const [account, setAccount] = useState([])

    useEffect(() => {
        getAccount();
    }, [])

    const getAccount = () => {
        setAccount(props.data)
    }
    return (
        <ul className="list-group" style={{ position: 'absolute', textAlign: 'left' }}>
            <li>{account.name}</li>
            <li>{account.email}</li>
            <li>{account.wins}</li>
            <li>{account.playedTournaments}</li>
        </ul>
    );
}

export default Account;
