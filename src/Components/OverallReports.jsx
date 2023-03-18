import React from 'react'
import '../css/Overall.css'
import { useState } from 'react'

function OverallReports() {
    const [toggle, setToggle] = useState(false)
    const [overallreport, setOverallreport] = useState(false)
    return (
        <>
            <div className="overall-report-title">
                <p>Overall Report Today</p>
            </div>

            <div className="overall-report-container">

                {!toggle  && !overallreport && <button className="overall-btn" onClick={()=>{
                    setToggle(true)
                }}>Update overall report</button>}

                {toggle && <div className='overall-input-div'>
                    <textarea name="" className="overall-report-input" placeholder='Enter overall report'></textarea>
                    <button className="overall-btn-save" onClick={()=>{
                        setOverallreport(true)
                        setToggle(false)
                    }}>Save</button>
                </div>
                }

               { overallreport  && <div className="overall-report-content">
                    <p>sdfsddfs Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore voluptates aspe
                        riores quo illum voluptatibus eius quas unde nostrum vitae illo quos modi tenetur, aliquid libe
                        ro, cum eum architecto corporis dicta hic atque ipsum a temporibus! Iste totam quam hic, verita
                        tis aperiam enim animi sunt rerum ducimus minus est recusandae?</p>
                </div>}
            </div>
        </>
    )
}

export default OverallReports