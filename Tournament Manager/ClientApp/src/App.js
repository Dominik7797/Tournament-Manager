import React, {useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Tournaments from './components/Tournaments';
import Account from './components/Account';
import Leaderboard from './components/Leaderboard';
import TournamentCreator from './components/TournamentCreator';
import TournamentNavbar from './components/TournamentNavbar';
import TournamentBracket from './components/TournamentBracket';
function App() {

    return (
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
                        <Route path="/tournament/">
                            <TournamentBracket />
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
