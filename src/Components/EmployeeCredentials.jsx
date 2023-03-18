import React from 'react'
import '../css/AdminCredentials.css'
import { useState } from 'react'

function EmployeeCredentials() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="admincred-container">
            <p className="alladmins">Employee Login Credentials</p>
            <div className="admincred-headings">
                <p>Company ID</p>
                <p>Password</p>
            </div>
            <div className="admincred">
                <p>Igoraza@123</p>
                <p>12345</p>
            </div>
            <div className="admincred">
                <p>igorazapvt@ltd</p>
                <p>12345</p>
            </div>
            <div className="createNew">
                {!toggle && <button onClick={() => {
                    setToggle(true)
                }} className='createNewBtn'>Create New</button>}
                {
                    toggle && <form action="">
                        <input type="text" name='companyID' placeholder='Company ID' />
                        <input type="password" name='password' placeholder='password' />
                        <div className="close-save-admin">
                            <button onClick={() => {
                                setToggle(false)
                            }} className='saveAdmin'>Save</button>
                            <img src="images/close.png" className='admin-close' alt="" onClick={() => {
                                setToggle(false)
                            }} />
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

export default EmployeeCredentials