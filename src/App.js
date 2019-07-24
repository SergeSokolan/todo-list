import React, { Fragment } from 'react'
import TodoContainer from './components/Container'
import { GlobalStyles } from './styles'

function App() {
 return (
  <Fragment>
   <GlobalStyles />
   <TodoContainer />
  </Fragment>
 )
}

export default App
