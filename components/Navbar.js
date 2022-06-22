import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle, AiOutlineUser } from 'react-icons/ai';


function Navbar({ cart, addToCart, removeFromCart, clearCart, subTotal }) {

  // console.log('cart--' + cart + '\n' + 'addToCart--' + addToCart + '\n' + 'removeFromCart--' + removeFromCart + '\n' + 'clearCart--' + clearCart + '\n' + 'subTotal--' + subTotal);

  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full');
      ref.current.classList.add('translate-x-0');
    } else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0');
      ref.current.classList.add('translate-x-full');
    }
  }

  return (
    <header className="text-gray-600 body-font shadow-md sticky top-0 z-10 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'}>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/images/mt-logo.png" alt="" height={50} width={200} />
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/categories/t-shirts'}><a className="mr-5 hover:text-gray-900">T-Shirts</a></Link>
          <Link href={'/categories/mugs'}><a className="mr-5 hover:text-gray-900">Mugs</a></Link>
          <Link href={'/categories/books'}><a className="mr-5 hover:text-gray-900">Books</a></Link>
        </nav>
        <Link href={'/signin'}>
          <div className='py-1 px-3 focus:outline-none  cursor-pointer   mt-4 md:mt-0'><AiOutlineUser /></div>
        </Link>

        <div className='cart-view'>
          <div onClick={toggleCart} className="py-1 px-3 focus:outline-none  cursor-pointer   mt-4 md:mt-0"><AiOutlineShoppingCart />
          </div>
          <div ref={ref} className={`sideCart w-72 h-[100vh] absolute top-0 right-0 bg-pink-100 p-4 transform transition-transform ${Object.keys(cart).length > 0 ? 'translate-x-0' : 'translate-x-full'} `}>
            <span onClick={toggleCart} className='absolute top-2 right-2 text-2xl text-pink-500 cursor-pointer'><AiFillCloseCircle /></span>
            <h3 className='font-bold text-xl'>Shopping Cart</h3>
            <ol className='list-decimal font-semibold'>
              {Object.keys(cart).length == 0 && <div className='mt-4 font-semibold'>Your cart is empty!</div>}
              {Object.keys(cart).map((item, index) => {
                return <li key={index} className='ml-4'>
                  <div className='item flex my-5'>
                    <div className="w-2/3 font-semibold">{cart[item].name}</div>
                    <div className='flex font-semibold items-center justify-center w-1/3 text-lg'>
                      <AiFillMinusCircle onClick={() => removeFromCart(item, 1, cart[item].price, cart[item].size, cart[item].varient)} className='cursor-pointer text-pink-500' />
                      <span className='m-2 text-sm'>{cart[item].qty}</span>
                      <AiFillPlusCircle onClick={() => addToCart(item, 1, cart[item].price, cart[item].size, cart[item].varient)} className='cursor-pointer text-pink-500' />
                    </div>
                  </div>
                </li>
              })}
            </ol>
            <div className='mt-8 font-bold'>Sub Total - ₹{subTotal}</div>
            <Link href={'/checkout'}>
              <button className="flex mx-auto mt-8 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Checkout</button>
            </Link>
            <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Clear Cart</button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar  