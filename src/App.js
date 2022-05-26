import React, { useState, useEffect } from 'react';

import AddContact from './Components/Contacts/AddContact';
// import ContactsList from './Components/Contacts/ContactsList';
// import SearchContact from './Components/Contacts/SearchContact';
import ContactSearchList from './Components/Contacts/ContactSearchList';

// import Card from './Components/UI/Card';

import styles from './app.module.css'

function App() {
  const [contactList, setContactList] = useState([]);
  const [searchField, setSearchField] = useState('')
  const [filteredContacts, setFilteredContacts] = useState([])


  // userInfo va a ser un objeto que va a venir del componente de addUser
  const addContactHandler = (contactInfo) => {
    setContactList((prevContactList) => {
      return [...prevContactList, contactInfo]
    })
  }

  useEffect(() => {
    const newFilteredContact = contactList.filter((contact) => {
      return contact.name.first.toLocaleLowerCase().includes(searchField) || 
      contact.name.last.toLocaleLowerCase().includes(searchField) ||
      contact.email.toLocaleLowerCase().includes(searchField)
    })
    setFilteredContacts(newFilteredContact)
  }, [searchField, contactList])

  const filterContactHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  

  return (
    <div className={styles.app}>
      <h1>Agenda.</h1>
      <AddContact onAddContact={addContactHandler} />
      <ContactSearchList contacts={filteredContacts} onFilteredContact={filterContactHandler} />
      
      {/* <Card className={styles.search_contact_list}>
        <SearchContact onSearchContact={searchContactHandler} />
        <ContactsList contacts={contactList} />
      </Card> */}
      
    </div>
  );
}

export default App;
