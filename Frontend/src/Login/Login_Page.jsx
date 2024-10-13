

import React from 'react';
import '../Login/Login.css';


function Login_Page() {
    return (
        <div className="container">
            <div className="header">
                <img  src="./src/logo.png" alt="Vizzi Logo" />
            </div>
            <div className="boxes-container">
                <div className="box">
                    <h2>Correctional Officer Access</h2>
                    <div className="button-container">
                        <a href="#correctional-signup" className="button">Sign Up</a>
                        <a href="#correctional-login" className="button">Log In</a>
                    </div>
                </div>
            </div>
            <div className="interactive-box">
                <div className="form" id="correctional-signup">
                    <h3>Sign Up</h3>
                    <form>
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" id="fullname" name="fullname" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                        <label htmlFor="facility">Correctional Facility Assigned:</label>
                        <input type="text" id="facility" name="facility" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="form" id="correctional-login">
                    <h3>Log In</h3>
                    <form>
                        <label htmlFor="email-login">Email:</label>
                        <input type="email" id="email-login" name="email" required />
                        <label htmlFor="password-login">Password:</label>
                        <input type="password" id="password-login" name="password" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login_Page;



