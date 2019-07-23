import styled from 'styled-components'

export const Todo = styled.div`
 margin: 40px;
`

export const Input = styled.input.attrs({ type: 'text' })``
export const AddButton = styled.button.attrs({ type: 'button' })``
export const List = styled.ul``
export const ListItem = styled.li`
 ${props => (props.isDone ? 'text-decoration: line-through;' : '')}
`
