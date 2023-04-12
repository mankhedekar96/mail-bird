import { createContext } from 'react';

export const MailContext = createContext({
  showModal: false,
  setShowModal: () => {},
  editEmail: null,
  setEditEmail: () => {}
});
