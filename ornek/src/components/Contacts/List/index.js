import React from 'react'


function List({contacts}) {
  return (
    <div>
      <ul>
        {
          contacts.map((contact, index) => (
            <li key={index}>{contact.fullName} - {contact.phone_number}</li>
          ))
        }
      </ul>

    </div>

  )
}

export default List