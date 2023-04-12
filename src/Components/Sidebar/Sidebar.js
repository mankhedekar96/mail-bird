import React from 'react';
import SidebarClosed from './SidebarClosed';
import SidebarOpen from './SidebarOpen';

function Sidebar({ open }) {
  return (
    <div className='sidebar-container' style={{width: open ? '300px' : '60px'}}>
      {open ?
      <SidebarOpen /> :
      <SidebarClosed />}
    </div>
  );
}

export default Sidebar;
