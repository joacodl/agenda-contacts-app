import React from "react";

import ContactsList from "./ContactsList";
import SearchContact from "./SearchContact";

import Card from "../UI/Card";

import styles from "./ContactSearchList.module.css";

const ContactSearchList = ({ onFilteredContact, contacts }) => {
  return (
    <Card className={styles.contact_search_list}>
      <SearchContact onSearchContact={onFilteredContact} />
      <ContactsList contacts={contacts} />
    </Card>
  );
};

export default ContactSearchList;
