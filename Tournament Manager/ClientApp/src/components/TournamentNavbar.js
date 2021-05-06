import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
} from "react-router-dom";
import '../css/NavbarCSS.css';


export default function TournamentNavbar() {



    return (
        <nav class="navbar navbar-expand-lg fixed-top py-3 navbar-dark">
            <div class="container"><Navbar.Brand as={Link} to="/">Tournament-Manager</Navbar.Brand>
                <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>

                <div id="navbarSupportedContent" class="collapse navbar-collapse">
                    <Nav className="mr-auto">
                         <Nav.Link as={Link} to="/tournaments">Tournaments</Nav.Link>
                         <Nav.Link as={Link} to="/tournament-create">Creator</Nav.Link>
                         <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                    </Nav>
                    <Nav>
                        <li class="nav-item dropdown">
                            <Nav.Link as={Link} class="nav-link dropdown-toggle nav nav-item " to="/account" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Account  <i class="arrow down"></i>
                        </Nav.Link>
                            
                            <ul class="dropdown-menu" id="drp-down-show" aria-labelledby="navbarDropdown">
                                <Nav.Link as={Link} id="link1" class="dropdown-item" to="/login">Sign In</Nav.Link>
                                <Nav.Link as={Link} id="link2" class="dropdown-item" to="/register">Registration</Nav.Link>
                            </ul>
                        </li>
                    </Nav>
                </div>
            </div>
        </nav>
    );
}