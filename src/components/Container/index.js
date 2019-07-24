import React, { PureComponent } from 'react'
import List from '../Items'

import { Todo, Input, AddButton } from './styles'
import todoListData from './data'

export default class TodoContainer extends PureComponent {
 constructor(props) {
  super(props)

  this.state = {
   inputValue: '',
   todoData: todoListData
  }

  this.handleInputChange = this.handleInputChange.bind(this)
  //this.addItem = this.addItem.bind(this)
 }

 handleInputChange(event) {
  this.setState({
   inputValue: event.target.value
  })
 }

 //  addItem = () => {
 //   this.setState(state => {
 //    const todoData = state.todoData.concat({
 //     text: this.state.inputValue,
 //     done: false
 //    })

 //    return {
 //     inputValue: '',
 //     todoData
 //    }
 //   })
 //  }

 render() {
  return (
   <Todo>
    <Input value={this.state.inputValue} onChange={this.handleInputChange} />
    <AddButton onClick={this.addItem}>Add</AddButton>
    <List data={this.state.todoData} />
   </Todo>
  )
 }
}
