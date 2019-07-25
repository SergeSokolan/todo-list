import styled from 'styled-components'

export const ListContainer = styled.ul`
 list-style: decimal;
`

const active = `
text-decoration: line-through;
color: green;
`

export const ListItem = styled.li`
 cursor: pointer;
 &:hover {
  color: blue;
 }
 ${props => (props.isDone ? active : '')}
`

export const Text = styled.span``
