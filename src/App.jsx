import { useState } from 'react'
import { Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import DetailsPage from './pages/DetailsPage'
import Cart from './pages/Cart'
import { useMyContent } from './Context/CartContext'


function App() {
  // const data = useMyContent()
  // console.log(data)
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<DetailsPage />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
