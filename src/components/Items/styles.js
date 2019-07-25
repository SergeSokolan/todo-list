import styled from 'styled-components'

export const ListContainer = styled.ul`
 list-style: none;
`

const active = `
text-decoration: line-through;
color: gray;
`
const itemDefault = `
 cursor: pointer;
 &:hover {
  color: blue;
 }
`

export const ListItem = styled.li`
 ${props => (props.isDone ? active : itemDefault)}
`

export const Text = styled.span``
