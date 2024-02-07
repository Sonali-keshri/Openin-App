import React from 'react'
import SideBar from '../components/SideBar'
import DashboardMain from '../components/DashboardMain'

const Dashboard = () => {
  return (
    <div className='max-w-[1514px] w-full bg-slate-200 flex  relative'>
      <SideBar/>
      <DashboardMain/>
    </div>
  )
}

export default Dashboard