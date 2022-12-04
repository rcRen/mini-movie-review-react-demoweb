import React from 'react'
import './MyButton.css'
function MyButton(props) {
  return (
    <button className = {`mybtn ${props.className}`} type = {props.type} onClick = {props.onClick}>
        {props.children}
    </button>
  )
}

export default MyButton