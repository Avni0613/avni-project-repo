import { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import "./App.css"
export default function App() {
  const [cart, setCart] = useState([]);
  const [totalAmt, setAmt] = useState(0);
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 56000,
      image: "https://m.media-amazon.com/images/I/510uTHyDqGL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Mobile",
      price: 30000,
      image: "https://vasanthandco.in/UploadedFiles/productimages/20251022012604-71BiI-RQ--L-_SL1500_.jpg"
    }, {
      id: 3,
      name: "Charger",
      price: 1000,
      image: "https://ringke.co.in/cdn/shop/files/618rYGQfDwL._SL1500_6f0794ad-f0a7-40f1-8eb4-428e2bdfa90c.jpg?v=1755948566"
    }
  ];

  function addToCart(product) {
    setCart([...cart, product]);
    setAmt(totalAmt + product.price);
  }

  function removeFromCart(index) {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart)
  }


  return (
    <div className='container'>
      <Header cartCount={cart.length} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart totalAmt={totalAmt} cart={cart} removeFromCart={removeFromCart} />
    </div>
  );

}



//function removeFromCart) {
//const updateCart = cart.filter((_, i) => i != index);
//setCart(updateCart);
//}
// reduce mean sbko reduce krke ek value dena
// const totalAmount = cart.reduce((total, index) => (total + index.price, 0));









