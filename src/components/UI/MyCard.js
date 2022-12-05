import React from 'react'
import './MyCard.css';

function MyCard(props) {
  return (
    <div className={`card ${props.className}`} style={props.style} >
        {props.children}
    </div>
  )
}

export default MyCard