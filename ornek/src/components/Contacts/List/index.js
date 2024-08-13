import React from 'react'
import { useState, useEffect } from 'react'


function List({contacts}) {
  const[filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString().toLowerCase()
      .includes(filterText.toLowerCase())
    );
  });

  console.log('filtered',filtered);

  return (
    <div>

      <input placeholder='Search...' 
      value={filterText} 
      onChange={(e)=>(setFilterText(e.target.value))}/>

      <ul className='list'>
        {
          filtered.map((contact, index) => (
            <li key={index}>{contact.fullName} </li>
          ))
        }
      </ul>

    </div>

  )
}

export default List