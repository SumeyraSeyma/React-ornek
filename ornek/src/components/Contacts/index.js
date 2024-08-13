import React from 'react'
import List from './List'
import Form from './Form'
import { useState, useEffect } from 'react'

import './style.css'

function Contacts() {
    const [contacts,setContacts] = useState([{
        fullName: 'Mehmet',
        phone_number: '123'
    },
    {
        fullName: 'Ahmet',
        phone_number: '456'
    },
    {
        fullName: 'Ayşe',
        phone_number: '789'
    }


])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

  return (
    <div id='container'>
        <List contacts ={contacts} />
        <Form addContact = {setContacts} contacts = {contacts} />
    </div>
  )
}

export default Contacts