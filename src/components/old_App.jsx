import { Component } from 'react';
import { AddContact } from './AddContact/AddContact'
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { DivWrap } from './App.styled';


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }
  componentDidMount() {
    const contactList = localStorage.getItem('contact-list')
    if (contactList !== null) {
      this.setState({
       contacts: JSON.parse(contactList) 
      })
    };
   
 }

  componentDidUpdate(pState) {
    if (pState.contacts !== this.state.contacts) {
      localStorage.setItem('contact-list', JSON.stringify(this.state.contacts) )
    }
      
  }
  
  addContact = contact => {
    const chekContact = this.state.contacts.some(el => {
     return el.name.trim() === contact.name.trim()  
    })
    
    if (chekContact) {
      alert(`${contact.name}  is already in contacts `)
      return
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact]
    }))
  }

  handleFilter =  (evt) => {
    this.setState({ filter: evt.target.value });

  }

  getFilterText = () => {
    const normalizedFilter = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter((el) => {
      return el.name.toLowerCase().includes(normalizedFilter);
    });
  }
  handleDelete = id => {
    this.setState(pState => ({
    contacts: pState.contacts.filter(el =>el.id !== id)
  }) )
}


  render() {
   
    return (
      <DivWrap>
        <h1>Phonebook</h1>
        <AddContact addNewContact={this.addContact} /> 
        <h2>Contacts</h2>
        <Filter handleFilter={this.handleFilter} />
        <ContactList onDeleteContact={this.handleDelete} getFilterText={this.getFilterText()} />
      </DivWrap>
      
  )}
  
}

