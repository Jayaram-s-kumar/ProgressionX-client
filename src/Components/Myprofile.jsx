import React from 'react'
import '../css/Myprofile.css'
import { useState } from 'react'

function Myprofile() {
    const [toggle, setToggle] = useState(false)
    const [repsubmitted, setRepsubmitted] = useState(false)
    return (
        <div className="myprofile-container">
            <div className="top-part">
                <div className="emp-title">
                    <div className="emp-image">
                        <img src="images/user.png" alt="" />
                    </div>
                    <div className="emp-details">
                        <p className="emp-name">Jayaram s kumar </p>
                        <p className="emp-company">IGORAZA </p>
                        <p className="emp-email">kumarjayaram545@gmail.com</p>
                    </div>
                </div>
                <div className="submit-todays">
                    {
                       repsubmitted && <p className="report-submitted">Report submitted successfully</p>
                    }
                    {
                          !toggle && <button className='submit-btn' onClick={()=>{
                            setToggle(true)
                          }}>Create new report</button>

                    }
                    {
                      
                        !repsubmitted && toggle && <div className="write-report">
                            <form action="" className='write-report-form'>
                                <textarea name="" id="" className='report-input' placeholder='Write your report'></textarea>
                                <button className='submit-btn'  onClick={()=>{
                                    setRepsubmitted(true)
                                }}>submit</button>
                            </form>
                        </div>
                    }
                </div>
            </div>
            <div className="allreport-title">
                <p>My Reports</p>
            </div>
            <div className="all-reports">
                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>

                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>

                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>

                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>
                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>
                <div className="report">
                    <div className="content">
                        <p className="report-text-content">
                            Made login page
                        </p>
                    </div>
                    <div className="report-date-time">
                        <div className="date">
                            <p>14/10/2022</p>
                        </div>
                        <div className="time">
                            <p> 9:00 pm</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Myprofile