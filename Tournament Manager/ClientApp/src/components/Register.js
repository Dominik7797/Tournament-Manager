import React, { useState } from 'react'
import axios from 'axios';
import '../css/AuthFormsCSS.css';

export default function Register() {

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [passwordRe, setPasswordRe] = useState([]);
    const [email, setEmail] = useState([]);
    const [isValidUsername, setIsValidUsername] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isCredentailsValid, setIsCredentailsValid] = useState(null);

    const validateInputFiledLength = (value, minValue) => {
        if (value < minValue) {
            return false;
        } else {
            return true;
        }
    }

    const handleUserInputChange = (e) => {
        let currentField = e.target.name;
        let inputValue = e.target.value;

        let minimumUsernameLength = 6;
        let minimumEmailLength = 12;

        if (currentField == "Username") {
            if (!validateInputFiledLength(inputValue.length, minimumUsernameLength)) {
                setUsername(inputValue);
                setIsValidUsername(false);
            } else {
                setUsername(inputValue);
                setIsValidUsername(true);
            }
        }
        else if (currentField == "Email") {
            if (!validateInputFiledLength(inputValue.length, minimumEmailLength)) {
                setEmail(inputValue);
                setIsValidEmail(false);
            } else {
                setEmail(inputValue);
                setIsValidEmail(true);
            }
        }
        else if (currentField == "Password") {
            setPassword(inputValue);
        } else {
            setPasswordRe(inputValue);
        }

    };

    const formSubmit = (event) => {
        event.preventDefault();
        console.log(username);
        axios.get(`/verify/username=${username}&email=${email}&password=${password}`).then(data => { setIsCredentailsValid(data.data) });
    }

    return (
        <form onSubmit={formSubmit}>
            <div id="container">
                <div id="left">
                </div>
                <div id="right">
                    <h1 id="login">Register</h1><br></br>
                    <input id="Username" name="Username" onChange={handleUserInputChange} class="client-info" />
                    <label for="Username">Username</label>
                    {isValidUsername === false && username.length > 1 &&
                        <p style={{ color: "red" }}>Invalid Username!</p>
                    }
                    <input type="Email" id="Email" onChange={handleUserInputChange} name="Email" class="client-info" />
                    <label for="Email">Email</label>
                    <input type="password" id="password" onChange={handleUserInputChange} name="Password" class="client-info" />
                    <label for="password">Password</label>
                    <input type="password" id="password-re" onChange={handleUserInputChange} name="PasswordRe" class="client-info" />
                    <label for="password-re">Password-Re</label>
                    {password !== passwordRe && password.length > 1 && passwordRe.length > 1 &&
                        <p style={{ color: "red" }}>Passwords does not match!</p>
                    }
                    {isCredentailsValid === true &&
                        <p style={{ color: "green" }}>Success!</p>

                    }
                    {isCredentailsValid === false &&
                        <p style={{ color: "red" }}>Email or username is taken!</p>
                    }
                    {isValidUsername === true && isValidEmail === true && password === passwordRe &&
                        <input type="submit" id="submit" class="client-info" value="Submit" />
                    }
                </div>
            </div>
        </form>
    )
}