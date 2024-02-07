import React, { useState } from 'react'
import Category from "../assets/Category.svg"
import Document from '../assets/Document.png'
import Notification from '../assets/Notification.png'
import Setting from "../assets/Setting.png";
import Ticket from "../assets/Ticket.png";
import Calender from "../assets/Calendar.png"
import dash_Logo from "../assets/Dash_Logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(true)
  }
  return (
    <>
      <div className='p-6 bg-white h-screen md:w-1/6 w-[300px] md:relative absolute md:block hidden '>
        <div className='mb-10 md:block flex justify-between items-center'>
          <img src={dash_Logo} className='w-24' />
          <RxCross2 className='w-8 h-8 md:hidden block' onClick={() => setToggle(false)} />
        </div>
        <div>
          <ul className='grid gap-10'>
            <li className='flex item-center gap-4 font-semibold'><img src={Category} className='w-7' />Dashboard</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Category} className='w-7' />Update</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Ticket} className='w-7' />Invoice</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Document} className='w-7' />Schedule</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Calender} className='w-7' />Calendar</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Notification} className='w-7' />Notification</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Setting} className='w-7' />Settings</li>
          </ul>
        </div>
      </div>

      {toggle && <div className='p-6 bg-white h-screen md:w-1/6 w-[300px] md:relative absolute '>
        <div className='mb-10 md:block flex justify-between items-center'>
          <img src={dash_Logo} className='w-24' />
          <RxCross2 className='w-8 h-8 md:hidden block' onClick={() => setToggle(false)} />
        </div>
        <div>
          <ul className='grid gap-10'>
            <li className='flex item-center gap-4 font-semibold'><img src={Category} className='w-7' />Dashboard</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Category} className='w-7' />Update</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Ticket} className='w-7' />Invoice</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Document} className='w-7' />Schedule</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Calender} className='w-7' />Calendar</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Notification} className='w-7' />Notification</li>
            <li className='flex item-center gap-4 font-semibold'><img src={Setting} className='w-7' />Settings</li>
          </ul>
        </div>
      </div>}
      {!toggle && <div className='z-10 p-5  md:hidden absolute' onClick={handleToggle}>
        <GiHamburgerMenu className='w-8 h-8 text-blue-600' />
      </div>}
    </>
  )
}

export default SideBar