import React from 'react'
import "./styles.css"

const DisplayList = () => {

    const times = [
        "America-MG",
        "Athletico",
        "Atlético-GO",
        "Atlético-MG",
        "Avaí",
        "Botafogo",
        "Bragantino",
        "Ceará",
        "Corinthians",
        "Coritiba",
        "Cuiabá",
        "Flamengo",
        "Fluminense",
        "Fortaleza",
        "Goiás",
        "Internacional",
        "Juventude",
        "Palmeiras",
        "Santos",
        "São Paulo"
    ]

  return (
    <>
    <div className="display-list">
        <h1>Brasileirão Série A</h1>
        <ul>
            {times.map((item, index) => {
                return(<li key={index}>{item}</li>)
            })}
        </ul>
    </div>
    </>
  )
}

export default DisplayList