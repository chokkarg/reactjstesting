import React from 'react'

export default function HeaderComp({dishcolor}) {
  return (
    <div>
     <h1 style={{color:dishcolor}}>This green color came from app component</h1>
     </div>
  )
}
