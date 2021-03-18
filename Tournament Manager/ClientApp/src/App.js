import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home'
import '../src/css/NavBar.css'

function App() {
    return (
            <div className="App">
                <header className="App-header">
                </header>
        <Router>
                <nav>
                    <ul>
                        <li className="NavElement">
                            <Link to="/" className="NavElementLink">Home</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/tournaments" className="NavElementLink">Tournaments</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/leaderboard" className="NavElementLink">Leaderboard</Link>
                        </li>
                        <li className="NavElement">
                            <Link to="/account" className="NavElementLink">Account</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/tournaments">
                        <Home />
                    </Route>
                    <Route path="/leaderboard">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Home />
                    </Route>
                    <Route path="/register">
                        <Home />
                    </Route>
                </Switch>
                </Router>
                </div>
    );
}
export default App;
