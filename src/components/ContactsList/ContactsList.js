import { ContactItems } from '../ContactItems/ContactItems';
import PropTypes from 'prop-types';
import { Menu } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <Menu className="contact-menu">
    {contacts.map(contact => (
      <ContactItems
        key={contact.id}
        name={contact.name}
        number={contact.number}
        id={contact.id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </Menu>
);

ContactsList.propTypes = {
  // contacts: PropTypes.arrayOf(
  //   PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  // ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
