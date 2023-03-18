import React from 'react'
import '../css/Signup.css'

function Signup() {
    return (
        <div className="join-comp-container-signup">
            <div className="box-signup" id="join-company">
                <h2>Sign up</h2>
                <p> </p>
                <form>
                    <div className="inputBox">
                        <input type="email" name="email" required="" onkeyup="this.setAttribute('value', this.value);"
                            value="" />
                            <label>Email</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="username" required="" onkeyup="this.setAttribute('value', this.value);"
                            value="" />
                            <label>Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="password" required="" onkeyup="this.setAttribute('value', this.value);"
                            value="" />
                            <label>Password</label>
                    </div>
                    <div className="submit-button">
                        <input type="submit" name="sign-in" value="Sign up" />
                            <a href="./Signin.html">
                                <p>Signin</p>
                            </a>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default Signup