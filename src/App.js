import React, { Component } from 'react'
import { Todo, Input, AddButton, List, ListItem } from './styles'

export default class TodoList extends Component {
 constructor(props) {
  super(props)

  this.state = {
   inputValue: '',
   todoData: [
    { text: 'learn js', done: false },
    { text: 'walking with dog', done: true },
    { text: 'buy beer', done: false },
    { text: 'drink beer', done: false }
   ]
  }

  this.handleInputChange = this.handleInputChange.bind(this)
  this.addItem = this.addItem.bind(this)
 }

 handleInputChange(event) {
  this.setState({
   inputValue: event.target.value
  })
 }

 addItem = () => {
  this.setState(state => {
   const todoData = state.todoData.concat({
    text: this.state.inputValue,
    done: false
   })

   return {
    inputValue: '',
    todoData
   }
  })
 }

 renderItems() {
  return this.state.todoData.map((item, index) => (
   <ListItem key={`TodoListItem_${index}`} isDone={item.done}>
    {item.text}
   </ListItem>
  ))
 }

 render() {
  return (
   <Todo>
    <Input value={this.state.inputValue} onChange={this.handleInputChange} />
    <AddButton onClick={this.addItem}>Add</AddButton>
    <List>{this.renderItems()}</List>
   </Todo>
  )
 }
}
