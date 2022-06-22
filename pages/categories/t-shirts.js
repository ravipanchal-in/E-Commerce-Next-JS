import React from 'react'
import Link from 'next/link'
import mongoose from 'mongoose'
import Product from '../../models/products';

function Tshirts({ products }) {


  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item, index) => {
              return (
                <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <Link href={`/product/${item.slug}`}>
                    <a className="block relative rounded overflow-hidden">
                      <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/products/tshirt.jpg" />
                    </a>
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">₹ {item.price}</p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(params) {

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI)
  }
  let allProducts = await Product.find({ category: 'tshirt' })
  return {
    props: { products: JSON.parse(JSON.stringify(allProducts)) }
  }
}


export default Tshirts