import { render, screen } from '@testing-library/react';
import List from './List';
import { UserProvider } from '../../Context/UserProvider';
import { MailContext } from '../../Context/MailProvider';

const listData = [
    {
        id: '1',
        from: 'a@abc.com',
        to: 'b@email.com',
        cc: 'c@email.com',
        subject: 'Test 1',
        body: 'Test Body',
        created: new Date(),
        unread: true,
        labels: ['ABC']
      },
];
test('renders learn react link', () => {
  render(
    <UserProvider email="a@abc.com">
        <MailContext.Provider value={{ showModal: false, setShowModal: () => {}, editEmail: false, setEditEmail: () => {} }}>
            <List listData={listData} type="sent" email="a@abc.com" setListData={jest.fn()} />
        </MailContext.Provider>
    </UserProvider>
  );
  const linkElement = screen.getByText(/Test 1/i);
  expect(linkElement).toBeInTheDocument();
});
