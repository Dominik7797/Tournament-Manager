import React, {useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import axios from 'axios';
import Tournaments from './components/Tournaments';
import Account from './components/Account';
import Leaderboard from './components/Leaderboard';
import '../src/css/MainPageCSS.css';
import TournamentCreator from './components/TournamentCreator';
import TournamentNavbar from './components/TournamentNavbar';
function App() {

    const [username, setUsername] = useState([]);

    useEffect(() => {
        GetCookieData();
    }, []);

    const GetCookieData = () => {
        axios.get("/auth/cookie/username").then(data => {
            setUsername(data.data);
        })
    }

    return (
        console.log(username),
            <div className="App">
                <header className="App-header">
                </header>
            <Router>
                    <Switch>
                        <Route path="/tournaments">
                            <TournamentNavbar />
                            <Tournaments />
                        </Route>
                        <Route path="/account">
                            <TournamentNavbar />
                            <Account />
                        </Route>
                        <Route path="/leaderboard">
                            <TournamentNavbar />
                            <Leaderboard />
                        </Route>
                        <Route path="/tournament-create">
                            <TournamentNavbar />
                            <TournamentCreator />
                        </Route>
                        <Route path="/login">
                            <TournamentNavbar />
                            <Login />
                        </Route>
                        <Route path="/register">
                            <TournamentNavbar />
                            <Register />
                        </Route>
                        <Route path="/">
                            <TournamentNavbar />
                            <Home />
                        </Route>
                    </Switch>
            </Router>
            </div>
    );
}
export default App;
