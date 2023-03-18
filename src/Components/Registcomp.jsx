import React from 'react'
import '../css/Registcomp.css'


function Registcomp() {
    return (
        <div className="regist-comp">
            <div className="reg-form">
                <div className="box-regist-comp">
                    <h2>Register now</h2>
                    <p> </p>
                    <form>
                    <div class="inputBox">
                        <input type="text" name="compName" required="" onkeyup="this.setAttribute('value', this.value);"
                            value=""/>
                        <label>Company name</label>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="streetaddress" required=""
                            onkeyup="this.setAttribute('value', this.value);" value=""/>
                        <label>Streest Address</label>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="city" required="" onkeyup="this.setAttribute('value', this.value);"
                            value=""/>
                        <label>City</label>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="state" required="" onkeyup="this.setAttribute('value', this.value);"
                            value=""/>
                        <label>State</label>
                    </div>
                    <div class="inputBox">
                        <input type="text" name="pincode" required="" onkeyup="this.setAttribute('value', this.value);"
                            value=""/>
                        <label>Pin code</label>
                    </div>
                    <div class="inputBox">
                        <input type="email" name="email" required="" onkeyup="this.setAttribute('value', this.value);"
                            value=""/>
                        <label>Email</label>
                    </div>

                    <div class="reg-comp-button">
                        <input type="submit" name="sign-in" value="Register"/>
                    </div>



                    </form>
                </div>

            </div>
            <div className="reg-image">
                <img src="images/company-image.jpg" alt="" className="company-image" />
            </div>
        </div>
    )
}

export default Registcomp