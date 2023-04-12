import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegChartBar } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaChartPie, FaFlask, FaEdit, FaGlobeAsia } from 'react-icons/fa';
import { ImCopy } from 'react-icons/im';
import { IoMdDesktop } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';

function SidebarClosed() {
  return (
    <div className='sidebar-closed'>
        <nav>
          <div className='text-light font-bold w-100 text-center p-3 h6 mb-0'>
            IN+
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <RxDashboard />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <IoDiamondOutline />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaRegChartBar />
          </div>
          <div className='sidebar-btn sidebar-btn-active text-light w-100 text-center p-3'>
            <HiMail />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaChartPie />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaFlask />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaEdit />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <IoMdDesktop />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <ImCopy />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaGlobeAsia />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <FaFlask />
          </div>
          <div className='sidebar-btn text-light w-100 text-center p-3'>
            <BsLaptop />
          </div>
        </nav>
    </div>
  );
}

export default SidebarClosed;
