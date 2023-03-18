import React from 'react'
import '../css/Homepage.css'

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="hero">
                <div className="hero-headings">
                    <p>Track the daily work with ProgressionX</p>
                    <div className="hero-para">
                        <p>ProgressionX is a comprehensive platform that helps you track your daily work and stay organized.
                            Whether you're an individual employee or part of a larger team, ProgressionX makes it easy to log
                            your daily tasks, monitor progress, and collaborate with others.</p>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="images/Progression.webp" alt="" />
                </div>
            </div>
            <div className="home-cards">
                <div className="homecard1">

                </div>
                <div className="homecard2">

                </div>
                <div className="homecard3">

                </div>
            </div>
            <div className="join-comp-container">
                <div className="box" id="join-company">
                    <h2>Join a Company</h2>
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
                        <input type="submit" name="sign-in" value="Join" />
                    </form>
                </div>

            </div>

        </div>

    )
}

export default Homepage