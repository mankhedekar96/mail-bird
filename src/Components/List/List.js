import React, { useContext, useState } from 'react';
import { Badge } from "react-bootstrap";
import { FiRefreshCw } from 'react-icons/fi';
import { IoTrashOutline, IoAttachOutline } from "react-icons/io5";
import { FaRegEye, FaExclamation, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { deleteEmails, markEmails } from '../../Services/emails';
import { MailContext } from '../../Context/MailProvider';

const List = ({ listData, type, email, setListData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const { setShowModal, setEditEmail } = useContext(MailContext);

  const itemsPerPage = 12;

  const handleDelete = () => {
    const remainingItems = listData.filter((item) => !selectedItems.includes(item.id));

    deleteEmails(email, type, selectedItems).then(() => {
      setListData(remainingItems);
      setSelectedItems([]);
      setCurrentPage(1);
    });
  };

  const handleMarkRead = () => {
    const updatedItems = listData.map(item => {
      if(selectedItems.includes(item.id)) item.unread = false;
      return item;
    });

    markEmails(email, type, selectedItems).then(() => {
      setListData(updatedItems);
      setSelectedItems([]);
    });
  };

  const openEmail = (item) => {
    const updatedItems = listData.map(el => {
      if(el.id === item.id) el.unread = false;
      return el;
    });
    markEmails(email, type, [item.id]).then(() => {
      setListData(updatedItems);
      setEditEmail(item);
      setShowModal(true);
    });
  };

  const handleSelectItem = (id) => {
    const newSelectedItems = [...selectedItems];
    if (newSelectedItems.includes(id)) {
      newSelectedItems.splice(newSelectedItems.indexOf(id), 1);
    } else {
      newSelectedItems.push(id);
    }
    setSelectedItems(newSelectedItems);
  };

  const renderList = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if(!listData.length) return <h4 className='p-3'>No emails found!</h4>

    return listData.slice(start, end).map((item) => (
      <div key={item.id} onClick={() => openEmail(item)} className={`${(type !== 'sent' && item.unread ? 'list-container-unread' : '')} p-2 d-flex justify-content-between align-items-center`}>
        <div>
          <input
            type="checkbox"
            checked={selectedItems.includes(item.id)}
            onClick={(e) => e.stopPropagation()}
            onChange={() => handleSelectItem(item.id)}
          />
          <span className='d-inline-block mx-3 font-weight-bold'>{type === 'sent' ? item.to : item.from}</span>
        </div>
        <span>{item.subject}</span>
        <span>{item.attachment ? <IoAttachOutline /> : ''}</span>
        <span>{
        new Date().getDate() === item.created.getDate() ? 
        `${item.created.getHours()}:${item.created.getMinutes()}` :
        item.create.toLocaleDateString('en-us', { month:"short", day:"numeric"})}</span>
      </div>
    ));
  };

  const previousPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    const totalPages = Math.ceil(listData.length / itemsPerPage);
    if(totalPages > currentPage) setCurrentPage(currentPage + 1);
  }

  return (
    <div>
      <div className="w-100 text-left py-1 d-flex justify-content-between">
        <div>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark">
            <FiRefreshCw /> Refresh
            </Badge>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark" onClick={handleMarkRead}>
            <FaRegEye />
            </Badge>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark">
            <FaExclamation />
            </Badge>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark" onClick={handleDelete}>
            <IoTrashOutline />
            </Badge>
        </div>
        <div>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark" onClick={previousPage}>
            <FaChevronLeft />
            </Badge>
            <Badge className="border p-2 mx-1 rounded-0" bg="light" text="dark" onClick={nextPage}>
            <FaChevronRight />
            </Badge>
        </div>
      </div>
      {renderList()}
    </div>
  );
};

export default List;
