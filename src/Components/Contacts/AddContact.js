import React, { useState, useEffect } from 'react'

import Card from '../UI/Card'
import Input from '../UI/Input'
import Button from '../UI/Button'

import styles from './AddContact.module.css'

const initialFormValues = {
    enteredFirstName: "", 
    enteredLastName: "", 
    enteredEmail: "", 
    enteredTel: "",
    // enteredImg: "" 
}

const AddUser = ({ onAddContact }) => {
    const [contactInput, setContactInput] = useState(initialFormValues)
    // Photo upload states
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const formHandler = (event) => {
        setContactInput({...contactInput, [event.target.name]: event.target.value})
    }

    // useEffect(() => {
    //     if (!selectedFile) {
    //         setPreview(undefined)
    //         return
    //     }
    //     const objectUrl = URL.createObjectURL(selectedFile)
    //     setPreview(objectUrl)

    //     return () => URL.revokeObjectURL(objectUrl)
    // }, [selectedFile])

    // const onSelectFile = e => {
    //     if (!e.target.files || e.target.files.length === 0) {
    //         setSelectedFile(undefined)
    //         return
    //     }

    //     setSelectedFile(e.target.files[0])
    // }

    const submitHandler = (event) => {
        event.preventDefault()

        const contactData = {
            name: {first: contactInput.enteredFirstName, last: contactInput.enteredLastName},
            email: contactInput.enteredEmail,
            phoneNumber: contactInput.enteredTel,
            // photo: contactInput.enteredImg
        }

        onAddContact(contactData);

        setContactInput(initialFormValues)
    };

  return (
    <Card className={styles.add_contact}>
        <form onSubmit={submitHandler}>
            {/* First mame*/}
            <div>
                <label htmlFor="first-name">First Name</label>
                <Input type="text" name="enteredFirstName" id="first-name" value={contactInput.enteredFirstName} onChange={formHandler} />
            </div>
            {/* Last Name */}
            <div>
                <label htmlFor="last-name">Last Name</label>
                <Input type="text" name="enteredLastName" id="last-name" value={contactInput.enteredLastName} onChange={formHandler} />
            </div>            
            {/* Email */}
            <div>
                <label htmlFor="email">Email</label>
                <Input type="email" name='enteredEmail' id='email' value={contactInput.enteredEmail} onChange={formHandler} />    
            </div>
            {/* Phone Number */}
            <div>
                <label htmlFor="phone-number">Phone Number</label>
                <Input type="tel" name="enteredTel" id="phone-number" value={contactInput.enteredTel} onChange={formHandler} />    
            </div>          

            {/* <div>
                <label htmlFor='contact-img'>Contact Photo</label>
                {selectedFile ? 
                    <div className={styles.contact_img_preview}>
                        <div>
                            <img src={preview} alt="Uploaded Preview"  />
                        </div>
                    </div> :
                    <div className={styles.contact_img_preview}>
                        <div>
                            <img src='https://i.pinimg.com/originals/cf/34/f0/cf34f0af5496bf6eadda07c8042b9279.png' alt="No Upload"  />
                        </div>
                    </div>}
                <input type="file" name="enteredImg" id="contact-img" onChange={onSelectFile} />
            </div>   */}

            {/* Submit Button */}
            <Button type='submit'>Add Contact</Button>

        </form>
    </Card>
  )
}

export default AddUser