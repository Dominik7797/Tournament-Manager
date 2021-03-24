import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
} from "react-router-dom";


export default function TournamentNavbar() {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">Tournament-Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/tournaments">Tournaments</Nav.Link>
                    <Nav.Link as={Link} to="/tournament-create">Creator</Nav.Link>
                    <Nav.Link as={Link} to="/leaderboard">Leaderboard</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/account">Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}