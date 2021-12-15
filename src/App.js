import './App.scss';
import React from 'react';
import { Component } from 'react';
import { AddContact } from './components/ContactForm/ContactForm';
import { ContactsList } from './components/ContactList/ContactList';
import { Container } from './components/Container/Container';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
  };

  createContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const dublicateContact = contacts.some(checkedContact => {
      console.log('conatcts', contacts);
      console.log('iter', checkedContact.name);
      console.log('name', name);
      return checkedContact.name.toLowerCase() === name.toLowerCase();
    });

    if (dublicateContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <Container title="Phonebook">
            <AddContact onSubmit={this.createContact} />
          </Container>
          <Container title="Contacts">
            <ContactsList contacts={this.state}></ContactsList>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
