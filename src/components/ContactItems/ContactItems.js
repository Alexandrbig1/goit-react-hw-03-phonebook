import PropTypes from 'prop-types';
import { Button, List, P } from './ContactItems.styled';

export const ContactItems = ({ name, number, id, onDeleteContact }) => (
  <List key={id}>
    <P>
      {name}: {number}
    </P>
    <Button type="button" onClick={() => onDeleteContact(id)}>
      Delete
    </Button>
  </List>
);

ContactItems.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
