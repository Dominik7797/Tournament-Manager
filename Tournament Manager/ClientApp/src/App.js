import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Tournaments from './components/Tournaments'
import Account from './components/Account'
import Leaderboard from './components/Leaderboard'
import '../src/css/NavBar.css'
import '../src/css/MainPageCSS.css'
import TournamentCreator from './components/TournamentCreator';

function App() {
    return (
            <div className="App">
                <header className="App-header">
                </header>
            <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link className="linkButton" to="/" >Home</Link>
                            </li>
                            <li>
                                <Link className="linkButton" to="/tournaments" >Tournaments</Link>
                            </li>
                            <li>
                                <Link className="linkButton" to="/leaderboard" >Leaderboard</Link>
                            </li>
                            <li>
                                <Link className="linkButton" to="/account" >Account</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/tournaments">
                            <Tournaments />
                        </Route>
                        <Route path="/account">
                            <Account />
                        </Route>
                        <Route path="/leaderboard">
                            <Leaderboard />
                        </Route>
                        <Route path="/tournament-create">
                            <TournamentCreator />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
            </Router>
            </div>
    );
}
export default App;
