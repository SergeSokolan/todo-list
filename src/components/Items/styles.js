import styled from 'styled-components'

export const ListContainer = styled.ul``
export const ListItem = styled.li`
 ${props => (props.isDone ? 'text-decoration: line-through;' : '')}
`
export const Text = styled.span``
export const StatusButton = styled.button.attrs({ type: 'button' })``
