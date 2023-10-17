import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { FormSubmit } from './FormSubmit/FormSubmit';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmitForm = data => {
    const newContact = { ...data, id: nanoid() };
    this.setState(({ contacts }) => {
      if (this.isNewContact(contacts, newContact) !== undefined) {
        alert(`${newContact.name} is already in contacts.`);
        return { contacts: [...contacts] };
      } else {
        return { contacts: [...contacts, newContact] };
      }
    });
  };

  isNewContact = (contacts, newContact) => {
    return contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  onChangeFilter = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
    // if (prevState.filter !== this.state.filter) {
    //   localStorage.setItem('form-filters', JSON.stringify(this.state.filter));
    // }
  }

  filterByName = () => {
    const { contacts, filter } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.filterByName();

    return (
      <AppContainer>
        <AppWrapper>
          <AppDiv className="phonebook-wrapper">
            <AppTitleH1>Phonebook</AppTitleH1>
            <FormSubmit onSubmit={this.onSubmitForm} />
            <AppContactsDiv className="contacts-wrapper">
              <AppTitleH2>Contacts</AppTitleH2>
              <Filter filter={filter} onChangeFilter={this.onChangeFilter} />
              <ContactsList
                contacts={visibleContacts}
                onDeleteContact={this.deleteContact}
              />
            </AppContactsDiv>
          </AppDiv>
        </AppWrapper>
      </AppContainer>
    );
  }
}
