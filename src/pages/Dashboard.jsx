import React from 'react'
import DashboardContent from '../components/DashboardContent'
import DashboardDetail from '../components/DashboardDetail'
import NavbarDashBoard from '../components/NavbarDashBoard'

const Dashboard = () => {
  return (
    <div>
        <NavbarDashBoard/>
        <DashboardContent/>
    </div>
  )
}

export default Dashboard