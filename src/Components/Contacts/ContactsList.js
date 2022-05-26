import React from 'react';

import Card from '../UI/Card';

import styles from './ContactsList.module.css';

const ContactsList = ({ contacts }) => {
  return (
    <div className={styles.contacts}>
      {contacts.length > 0 ? 
        contacts.map(contact =>
            <Card key={contact.email} className={styles.contact} >
              {/* <div className={styles.contact_photo}>
                <img src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg" alt="Example Profile Pic" />
              </div> */}
              <div className={styles.contact_info}>
                {/* <span>Name</span> */}
                <p>{`${contact.name.first} ${contact.name.last}`}</p>
                {/* <span>Email</span> */}
                <p>{contact.email}</p>
                {/* <span>Tel</span> */}
                <p>{contact.phoneNumber}</p>
              </div>
            </Card>
        ) : 
          <h2>No contacts added yet...</h2>
      }
        {}
    </div>
  )
}

export default ContactsList