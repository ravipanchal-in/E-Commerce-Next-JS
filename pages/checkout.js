import React from 'react'
import { AiFillMinusCircle, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';

function Checkout({ cart, subTotal, addToCart, removeFromCart, deleteFromCart }) {

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Checkout</h1>
        </div>

        <h3 className='my-8 mx-2 text-xl font-bold'>1. Delivery Details</h3>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Address</label>
              <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Phone</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">State</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Pin Code</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>

          <h3 className='my-8 mx-2 text-xl font-bold'>2. Shopping Cart</h3>
          <div className='bg-pink-100 w-full my-8 mx-2 px-4 pb-4'>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length == 0 && <div className='my-4   font-semibold'>Your cart is empty!</div>}
              {Object.keys(cart).map((item, index) => {
                return <li key={index} className='ml-4'>
                  <div className='item flex my-5'>
                    <div className="font-semibold">{cart[item].name}</div>
                    <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                      <AiFillMinusCircle onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].size, cart[item].varient)} className='cursor-pointer text-pink-500' />
                      <span className='m-2 text-sm'>{cart[item].qty}</span>
                      <AiFillPlusCircle onClick={() => addToCart(item, 1, cart[item].price, cart[item].size, cart[item].varient)} className='cursor-pointer text-pink-500' />
                    </div>
                    <div onClick={() => deleteFromCart(item)} className='text-pink-400 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer'><AiFillDelete /> &nbsp;Delete Item</div>
                  </div>
                </li>
              })}
            </ol>
            <h3 className='text-xxl font-bold'>Subtotal Rupees ₹{subTotal}</h3>
          </div>


          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Chekout & Pay ₹{subTotal}</button>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Checkout