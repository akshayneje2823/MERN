import React, { useState } from 'react'
import { data } from './data'
// import { useState } from 'react'


function App() {
  const [query, setQuery] = useState('')
  return (
    <div style={{
      display: "flex",
      justifyContent: "centers",
      justifyItems: 'center',
      alignItems: "center",
      flexDirection: "column",
      marginTop: "4%"
    }}>
      <div><input type={'text'} value={query} onChange={(e) => {setQuery(e.target.value)}} /></div>

      {
        data.filter((user) => user.first_name.toLowerCase().includes(query)).map((item,id) => <li key={id}>{item.first_name}</li>)
      }
    </div>
  )
}

export default App