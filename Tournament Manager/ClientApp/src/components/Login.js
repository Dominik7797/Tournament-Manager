import React, { useState } from 'react';
import axios from 'axios';
import '../css/AuthFormsCSS.css';

export default function Login() {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [isCredentailsValid, setIsCredentailsValid] = useState(null);

    const handleChange = (e) => {
        if (e.target.name === "Username") {
            setUsername(e.target.value);
        }

        else if (e.target.name === "Password") {
            setPassword(e.target.value);
        }

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get("/login/username=" + username + "&password=" + password).then(data => setIsCredentailsValid(data.data))
    }

    return (
        <form method="POST" action="/login" onSubmit={handleSubmit}>
            <div id="container">
                <div id="left">
                </div>
                <div id="right">
                    <h1 id="login">LogIn</h1><br></br>
                    <input id="Username" name="Username" onChange={handleChange} class="client-info" />
                    <label for="Username">Username</label>
                    <input type="password" id="password" onChange={handleChange} name="Password" class="client-info" />
                    <label for="password">Password</label>
                    {isCredentailsValid === true &&
                        <p style={{ color: "green" }}>Success!</p>
                    }
                    {isCredentailsValid === false &&
                        <p style={{ color: "red" }}>Password or username is invalid!</p>
                    }
                    <input type="submit" id="submit" class="client-info" value="Submit" />
                    <button class="social" id="facebook">connect with facebook</button>
                    <button class="social" id="google">connect with google</button>
                </div>
            </div>
            
        </form>
    )
}
