import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { BsCart } from "react-icons/bs";
import { useMyContent } from '../Context/CartContext';
import { useMySearch } from '../Context/SearchContext';
import  { useState, useEffect } from 'react'

const Navbar = () => {
  const { setSearchTerm, searchHandle } = useMySearch()
  // console.log('Search Data Here: ',  searchHandle)
  const [inputValue, setInputValue] = useState("")
  const { cartItems } = useMyContent()
  const totalCartsItems = cartItems.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue)
    }, 300)

    return () => clearTimeout(timer)

  }, [inputValue, setSearchTerm])

  return (
    <>
      <header className='bg-amber-700 pt-7 pl-4 pr-4 '>
        <div className='flex justify-between '>
          <h1 className="text-2xl font-extrabold text-white">
            Shop
            <span className="text-emerald-900">
              Verse
            </span>
          </h1>

          {/* login and cart  container  */}

          <div className='flex gap-10 pr-4'>
            <div>
              <NavLink to='/login'
                className={({ isActive }) => `${isActive ?
                  'text-green-500' : 'text-white'}`} >
                Login
              </NavLink>
            </div>

            {/* Cart and Count  */}

            <div
              className='flex gap-1 relative'>
              <Link to='/cart'
                className='text-white'>
                <BsCart
                  className='size-6.5 ' />
              </Link >
              <span
                className=' absolute -top-3 -right-3 rounded-full 
                min-w-5 h-5 max-h-8 px-1 text-white text-xs 
                flex items-center justify-center bg-red-500'>
                {totalCartsItems}
              </span>
            </div>

          </div>

        </div>

        {/* search Bar for products */}
        <form className='py-3 max-w-120 m-auto'>
          <input onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="bg-[#eff1f5] rounded-2xl px-4 py-2
           w-full ml-2 mr-2  focus-visible:outline-2
            focus-visible:outline-white"
            type="text" placeholder="search product"
            aria-label="Search product"
          />
        </form>
      </header>
    </>
  )
}
export default Navbar
