import React from 'react'
import { Link } from 'react-router-dom'
import "./styles.css"


const Cards = (props) => {
  return (
    <Link to={props.route} style={{ textDecoration: 'none' }}>
    <div className="cards">
        <div className="image">
            {props.image}
            {props.title}
        </div>
    </div>
    </Link>
  )
}

export default Cards