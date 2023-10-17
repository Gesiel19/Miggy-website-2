import { Form, Route, Routes } from 'react-router-dom'
import './App.css'

import Book from './components/front/Book'
import FrontPage from './components/front/FrontPage'


function App() {
 
  return (
    
   <Routes>
    <Route path='/' element={ <FrontPage /> }/>
    <Route path='/book' element={ <Book /> }/>
    <Route path='/form' element={ <Form /> }/>
   
   
   </Routes>
  )
}

export default App
