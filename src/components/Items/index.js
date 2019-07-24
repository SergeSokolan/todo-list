import React, { PureComponent } from 'react'

import { ListContainer, ListItem, Text, StatusButton } from './styles'

export default class List extends PureComponent {
 renderItems() {
  return this.props.data.map((item, index) => (
   <ListItem key={`TodoListItem_${index}`} isDone={item.done}>
    <Text>{item.text}</Text>
    <StatusButton
     onClick={this.props.itemStatus.bind(this, index)}
     index={index}>
     done
    </StatusButton>
   </ListItem>
  ))
 }

 render() {
  return <ListContainer>{this.renderItems()}</ListContainer>
 }
}
