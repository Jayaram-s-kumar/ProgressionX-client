import React from 'react'
import "../css/Signin.css"

function Signin() {
  return (
    <div className="join-comp-container-signin">
    <div className="box-signin" id="join-company">
        <h2>Sign in to ProgressionX</h2>
        <p> </p>
        <form>
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
                <input type="submit" name="sign-in" value="Sign in" />
               
            </div>
        </form>
    </div>

</div>
  )
}

export default Signin