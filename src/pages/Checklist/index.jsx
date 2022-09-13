import { Container } from '@mui/system'
import React, { useState } from 'react'
import Form from './Form'
import "./styles.css"
import TodoList from './TodoList'
import "./styles.css"
import { List } from '@mui/material'

const Checklist = () => {

  const [list, setList] = useState([])

  const addItemList = (item) => {
    setList([...list, item])
  }

  const deleteItemList = (id) => {
    var filtered = list.filter((itemList) => itemList.id !== id);
    setList(filtered)
  }

  return (
    <Container width="xs" className="checklist">
      <Form addItemList={addItemList}/ >
      <List sx={{ marginTop: '10px'}}>
        {list.map((item) => (
          <div className="list" key={item.id}>
            <TodoList itemList={item} deleteItemList={deleteItemList}/>
          </div>
          ))}
      </List>
    </Container>
  )
}

export default Checklist