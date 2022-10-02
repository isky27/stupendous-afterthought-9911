import React from 'react'
import DashNavbar from '../Components/DashBoardComponent.jsx/DashNavbar'

function Dashboard() {

    const user = JSON.parse(localStorage.getItem("user_login"));

  return (
    <>
    <DashNavbar></DashNavbar>
    </>
  )
}

export default Dashboard
