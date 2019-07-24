import React, { PureComponent } from 'react'

import { ListContainer, ListItem } from './styles'

export default class List extends PureComponent {
 renderItems() {
  return this.props.data.map((item, index) => (
   <ListItem key={`TodoListItem_${index}`} isDone={item.done}>
    {item.text}
   </ListItem>
  ))
 }

 render() {
  return <ListContainer>{this.renderItems()}</ListContainer>
 }
}
