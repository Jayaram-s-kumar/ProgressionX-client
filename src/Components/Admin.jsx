import React from 'react'
import '../css/Admin.css'
import { useState ,useEffect } from 'react'
import AdminCredentials from './AdminCredentials'
import EmployeeCredentials from './EmployeeCredentials'
import AllReports from './AllReports'
import OverallReports from './OverallReports'

function Admin() {
  const [admins, setadmins] = useState(true)
  const [employees, setEmployees] = useState(false)
  const [reports, setReports] = useState(false)
  const [overall, setOverall] = useState(false)

  useEffect(() => {
    handleDivClick('div1')
  }, [])
  
  return (
    <div className="admin-container">
      <div className="admin-options">
          <div className="option" id='div1' onClick={()=>{
            handleDivClick('div1')
            setadmins(true)
            setEmployees(false)
            setReports(false)
            setOverall(false)
            }}>
            <p>Admins</p>
          </div>
          <div className="option" id='div2' onClick={()=>{
            handleDivClick('div2')
            setadmins(false)
            setEmployees(true)
            setReports(false)
            setOverall(false)
            }}>
            <p>Employee Login</p>
          </div>
          <div className="option" id='div3' onClick={()=>{
            handleDivClick('div3')
            setadmins(false)
            setEmployees(false)
            setReports(true)
            setOverall(false)
          }}>
            <p>Today's Reports</p>
          </div>
          <div className="option" id='div4' onClick={()=>{
            handleDivClick('div4')
            setadmins(false)
            setEmployees(false)
            setReports(false)
            setOverall(true)
            }}>
            <p>Overall Report</p>
          </div>
      </div>
      <div className="admin-controls">
          
            {admins && <AdminCredentials/>}
           { employees && <EmployeeCredentials/>}
           {reports && <AllReports/>}
           {overall && <OverallReports/>}
          
      </div>
    </div>
  )

  function handleDivClick(divID){
    const div = document.getElementById(divID)
    div.style.backgroundColor = 'rgb(24 62 113)'
    const divArray=['div1','div2','div3','div4']
    divArray.map((obj)=>{
      if(obj!==divID){
        document.getElementById(obj).style.backgroundColor='transparent'
      }
    })
  }

 
}

export default Admin