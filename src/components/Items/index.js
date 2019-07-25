import React, { PureComponent } from 'react'

import { ListContainer, ListItem, Text } from './styles'

export default class List extends PureComponent {
 renderItems() {
  return this.props.data.map((item, index) => (
   <ListItem
    key={`TodoListItem_${index}`}
    onClick={this.props.itemStatus.bind(this, index)}
    index={index}
    isDone={item.done}>
    <Text>{item.text}</Text>
   </ListItem>
  ))
 }

 render() {
  return <ListContainer>{this.renderItems()}</ListContainer>
 }
}
