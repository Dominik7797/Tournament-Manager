import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
} from "react-router-dom";
import '../css/NavbarCSS.css'


export default function TournamentNavbar() {
    return (
        <nav class="navbar navbar sticky-top navbar-toggler navbar-dark bg-dark navbar-expand-custom">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Navbar.Brand as={Link} to="/">Tournament-Manager</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/tournaments">Tournaments</Nav.Link>
                        <Nav.Link as={Link} to="/tournament-create">Creator</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <li class="nav-item dropdown">
                        <Nav.Link as={Link} class="nav-link dropdown-toggle nav nav-item " to="/account" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </Nav.Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Nav.Link as={Link} class="dropdown-item" to="/login">Sign In</Nav.Link>
                                <Nav.Link as={Link} class="dropdown-item" to="/register">Registration</Nav.Link>
                            </ul>
                        </li>
                    </Nav>
                </div>
</nav>
    );
}