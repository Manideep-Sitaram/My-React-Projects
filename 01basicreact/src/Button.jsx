import React from 'react'

function Button({addOneToId}) {
    function handleClick (){
        addOneToId()
    }
  return (
    <button onClick={handleClick}>Increment</button>
  )
}

export default Button