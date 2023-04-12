import React, { useContext } from 'react';
import { RxDashboard } from 'react-icons/rx';
import { IoDiamondOutline } from 'react-icons/io5';
import { FaRegChartBar } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaChartPie, FaFlask, FaEdit, FaGlobeAsia, FaCaretDown, FaAngleLeft } from 'react-icons/fa';
import { ImCopy } from 'react-icons/im';
import { IoMdDesktop } from 'react-icons/io';
import { BsLaptop } from 'react-icons/bs';
import { Badge, Image } from 'react-bootstrap';
import { MailContext } from '../../Context/MailProvider';
import { UserContext } from '../../Context/UserProvider';

function SidebarOpen() {
  const { setShowModal } = useContext(MailContext);
  const { user, receivedEmails } = useContext(UserContext);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className='sidebar-open'>
        <nav>
          <div className='text-light w-100 text-left py-3 px-4 h6 mb-0'>
            <Image fluid roundedCircle width="50" alt='avatar' src='https://media.licdn.com/dms/image/C4E03AQGAtmvpeYb4Zg/profile-displayphoto-shrink_800_800/0/1547145554724?e=2147483647&v=beta&t=oMhsZ_Lalt6ySSk_9oDAxHQ7Ix5TEuL_0BVsngoF45c'/>
            <div className='h5 my-2 font-weight-bold'>{user?.name}</div>
            <p className='font-weight-normal text-muted my-2'>Art Director <span><FaCaretDown /></span></p>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <RxDashboard />
                <label className='mx-3 align-middle'>Dashboards</label>
            </span>
            <FaAngleLeft />
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <IoDiamondOutline />
                <label className='mx-3 align-middle'>Layouts</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaRegChartBar />
                <label className='mx-3 align-middle'>Graphs</label>
            </span>
            <FaAngleLeft />
          </div>
          <div className='sidebar-btn sidebar-btn-active text-white w-100 text-center py-3 px-4'>
            <div className='w-100 d-flex justify-content-between align-items-center'>
                <span>
                    <HiMail />
                    <label className='mx-3 align-middle'>Mailbox</label>
                </span>
                <Badge bg="warning">{`${receivedEmails.filter(el => el.unread).length}/${receivedEmails.length}`}</Badge>
            </div>
            <ul className='sidebar-items-container'>
                <li className='sidebar-item'>Inbox</li>
                <li className='sidebar-item'>Email View</li>
                <li className='sidebar-item' onClick={handleClick}>Compose Email</li>
                <li className='sidebar-item'>Email Templates</li>
            </ul>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaChartPie />
                <label className='mx-3 align-middle'>Metrics</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaFlask />
                <label className='mx-3 align-middle'>Widgets</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaEdit />
                <label className='mx-3 align-middle'>Forms</label>
            </span>
            <FaAngleLeft />
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <IoMdDesktop />
                <label className='mx-3 align-middle'>App Views</label>
            </span>
            <Badge bg="success">SPECIAL</Badge>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <ImCopy />
                <label className='mx-3 align-middle'>Copy</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaGlobeAsia />
                <label className='mx-3 align-middle'>Global</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <FaFlask />
                <label className='mx-3 align-middle'>About</label>
            </span>
          </div>
          <div className='sidebar-btn text-light w-100 text-center py-3 px-4 d-flex justify-content-between align-items-center'>
            <span>
                <BsLaptop />
                <label className='mx-3 align-middle'>Technology</label>
            </span>
          </div>
        </nav>
    </div>
  );
}

export default SidebarOpen;
