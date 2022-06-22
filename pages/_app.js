import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [cartQty, setCartQty] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (err) {
      console.error(err);
      localStorage.clear();
      saveCart(cart);
    }
  }, [])

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    let sbTtl = 0
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      sbTtl += myCart[keys[i]]['price'] * myCart[keys[i]].qty
    }
    setSubTotal(sbTtl);

  }

  const addToCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, size, name, varient }
    }
    console.log(newCart);
    setCart(newCart);
    saveCart(newCart);
  }

  const removeFromCart = (itemCode, qty, price, name, size, varient) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode]['qty'] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveCart(newCart);
  }
  const deleteFromCart = (itemCode) => {
    let newCart = cart;

    delete newCart[itemCode]

    setCart(newCart);
    saveCart(newCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log('Cart Cleared!');
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} deleteFromCart={deleteFromCart} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
