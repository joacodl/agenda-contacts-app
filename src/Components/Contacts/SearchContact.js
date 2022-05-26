import React from 'react'

import Input from '../UI/Input'

import styles from './SearchContact.module.css'

const SearchContact = ({ onSearchContact }) => {

  // const searchContactHandler = () => {}

  return (
    <div className={styles.search_contact}>
      <Input type="text" onChange={onSearchContact} placeholder="Search Contact" id="search-contact" />
    </div>
  )
}

export default SearchContact