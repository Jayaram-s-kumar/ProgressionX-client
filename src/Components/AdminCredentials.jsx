import React from 'react'
import '../css/AdminCredentials.css'
import { useState } from 'react'


function AdminCredentials() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="admincred-container">
            <p className="alladmins">Admins</p>
            <div className="admincred-headings">
                <p>Username</p>
                <p>Password</p>
            </div>
            <div className="admincred">
                <p>Jayaram s kumar</p>
                <p>12345</p>
            </div>
            <div className="admincred">
                <p>Jayaram s kumar</p>
                <p>12345</p>
            </div>
            <div className="admincred">
                <p>Jayaram s kumar</p>
                <p>12345</p>
            </div>
            <div className="admincred">
                <p>Jayaram s kumar</p>
                <p>12345</p>
            </div>
            <div className="createNew">
                {!toggle && <button onClick={() => {
                    setToggle(true)
                }} className='createNewBtn'>Create New</button>}
                {
                    toggle && <form action="">
                        <input type="text" name='username' placeholder='username' />
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

export default AdminCredentials