import React from 'react'

import styles from './Input.module.css'

const Input = (props) => {
  return (
    <input className={styles.input} type={props.type || 'text'} placeholder={props.placeholder || ''} name={props.name} id={props.id} value={props.value} onChange={props.onChange}></input>
  )
}

export default Input