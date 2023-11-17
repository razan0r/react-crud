import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Index from './components/users/Index.jsx'
import { Route, Routes } from 'react-router-dom'
import Create from './components/users/Create.jsx'
import Details from './components/users/Details.jsx'
import Update from './components/users/Update.jsx'
export default function App() {
  return (
 
    <Routes>
    <Route path='/' element={<Index/>}/>
  
   <Route path='/user/index' element={<Index/>} />
   <Route path='/user/create' element={<Create/>} />
   <Route path='/user/:id' element={<Details/>} />
   <Route path='/user/update/:id' element={<Update />} />
   <Route path='*' element={<p>page not fouuuuuuuuuuuuuuuuuuunnd</p>}/>
   </Routes>


  )
}
