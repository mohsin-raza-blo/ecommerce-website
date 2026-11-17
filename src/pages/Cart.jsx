
import React from 'react'
import { useMyContent } from '../Context/CartContext'
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa'

const Cart = () => {

    const { cartItems, increment, decrement, removeCartItems } = useMyContent()

    const subtotal = cartItems.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0)
    const totalItems = cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return (
        <div>
            <div className="flex w-full min-h-screen bg-gray-50 px-4 py-8 
            md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto w-full">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                        Shopping Cart
                        <span className="text-sm font-normal text-gray-500 ml-2">
                            ({cartItems.length} Items)
                        </span>
                    </h1>
                    {cartItems.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm py-16 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">
                                Your Cart is Empty
                            </h2>
                            <p className="text-gray-500 mt-2">
                                Add some products to your cart.
                            </p>
                        </div>

                    ) 
                    : 
                    (
                        <div className='flex flex-col md:flex-row gap-3.5'>
                            <div className="flex-1 flex flex-col gap-5">
                                {cartItems.map((item) => (
                                    <div key={item.id}
                                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 flex flex-col sm:flex-row sm:items-center gap-5">
                                        <div className="w-full sm:w-36 h-44 sm:h-36 shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-4">
                                            <img src={item.image} alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between
                                         gap-4">
                                            <div>
                                                <h2 className="text-base md:text-lg font-semibold text-gray-800 line-clamp-2">
                                                    {item.title}
                                                </h2>
                                                <p className="text-sm text-gray-500 mt-2">
                                                    Product ID: {item.id}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap items-center justify-between gap-4">
                                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                    <button onClick={() => decrement(item.id)}
                                                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-700 transition">                                   
                                                        <FaMinus size={11} />
                                                    </button>
                                                    <span className="w-10 text-center font-semibold text-gray-800">
                                                        {item.quantity}
                                                    </span>
                                                    <button onClick={() => increment(item.id)}
                                                        className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 text-gray-700 transition">
                                                        <FaPlus size={11} />
                                                    </button>
                                                </div>
                                                <button onClick={() => removeCartItems(item.id)}
                                                  
                                                    className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-medium
                                                     transition">
                                                    <FaTrash size={13} />
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                                            <p className="text-xs text-gray-500 mb-1">
                                                Price
                                            </p>
                                            <p className="text-xl font-bold text-gray-800">
                                                ${Number(item.price).toFixed(2)}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Qty: {item.quantity}
                                            </p>
                                        </div>
                                    </div>

                                ))}
                            </div>

                            <div className='bg-white rounded-xl shadow-sm px-5 max-h-fit text-center w-full md:w-[20rem] pb-5'>

                                <div className='py-5 px-3'>
                                    <h2 className='text-xl font-semibold'>
                                        Order Summary
                                    </h2>
                                    <p className='text-gray-500'>
                                        Your order details
                                    </p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex justify-between gap-4'>
                                        <p className='text-gray-600'>
                                            Subtotal ({totalItems} Items)
                                        </p>
                                        <p className='font-semibold'>
                                            ${subtotal.toFixed(2)}
                                        </p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <p className='text-gray-600'>
                                            Shipping
                                        </p>
                                        <p className='text-green-600'>
                                            Free
                                        </p>
                                    </div>
                                    <div className='flex justify-between border-t pt-4 font-bold text-lg'>
                                        <p>Total</p>
                                        <p> ${subtotal.toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}

                </div>

            </div>
        </div>
    )
}

export default Cart
