import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./styles.css"

const Form = ({addItemList}) => {

  const [ text, setText ] = useState(null)
  const [ id, setId ] = useState(0)

  const todoHandle = (text) => {
    const listObj = {text: text, id: id}
    setId(id + 1)
    addItemList(listObj)
    document.getElementById("filled-basic").value=null;
  }

  return (
    <div className="form">
        <TextField 
          id="filled-basic" 
          label="Tarefa" 
          variant="filled" 
          onChange={(e) => setText(e.target.value)}
          fullWidth
          style={{ backgroundColor: "white"}}
        />
        <Button variant="text" style={{ margin: "0 10px" }} onClick={() => todoHandle(text)}>Adicionar</Button>
    </div>
  )
}

export default Form