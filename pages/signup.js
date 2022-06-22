import React from 'react'
import Link from 'next/link'

function SignUp() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">

        <div className="lg:w-1/3 md:w-1/2 bg-white md:m-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-xl mb-1 font-bold title-font">Sign-Up</h2>
          <p className="leading-relaxed mb-5 text-gray-600">Already have an account? <Link href={'/signin'}>
            <a className='text-pink-600'>Sign-In</a>
          </Link> here</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <button className="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">Sign Up</button>
        </div>
      </div>
    </section>
  )
}

export default SignUp