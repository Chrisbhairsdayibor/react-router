import React from 'react'
import { Routes,Route,Link,NavLink } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Product from './components/Product'
import Header from './components/Header'

export default function App() {
  return (
    <div>
<Header />

       <Routes>
        <Route
         path='/'
          element={<Home/>}
        />
       <Route
         path='/cart'
          element={<Cart/>}
         />    
         <Route
         path='/:id'
          element={<Product/>}
         />   
       <Route
        path='*' 
        element={<h1>404</h1>}
       />  
       </Routes>
    </div>
  )
}