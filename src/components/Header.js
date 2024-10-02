import React, { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { FiCoffee } from "react-icons/fi";
import Order from './Order';
import Registration from './Registration';

const showOrders = (props) => {
  let sum = 0
  props.orders.forEach(el => sum += el.price);
  return (<div>
    {props.orders.map(el  => (
      <Order onDelete={props.onDelete} key={el.id} item={el}/>
    ))}
    <p className='sum'>Sum: {new Intl.NumberFormat().format(sum)} BYN</p>
    <div className='order' onClick={() => props.toggleRegistration()}>To order</div>
    {props.registrationOpen && <Registration 
    shoppingCart={props.orders}
    emptyShoppingCart={props.emptyShoppingCart}
    order={props.onOrder}
    />} 
  </div>)
}
const showNothing = () => {
  return(<div className='empty'>
    <h2>
      Shopping cart is empty
    </h2>
  </div>)
}
export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  let [registrationOpen, setRegistrationOpen] = useState(false);

  const toggleRegistration = () => {
    setRegistrationOpen(!registrationOpen);
  }
  return (
    <header>
        <div>
            <FiCoffee />
            <span className='logo'>TeaCatalog</span>
            <input type="text" placeholder="Search.."
              className='search-bar'
              onKeyDown={(event) => {
              if (event.key === 'Enter') {
                props.search(event.target.value) 
              }
            }}></input>
            <ul className='nav'>
              <a href='https://github.com/PolarMonke/TeaCatalog'><li>about us</li></a>
              <a href='https://www.yxtwitter.com/'><li>sponsor</li></a>
            </ul>
            <FiShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shopping-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
              <div className='shopping-cart'>
              {props.orders.length > 0 ?
                showOrders({ ...props, registrationOpen, toggleRegistration }) : showNothing()}
              </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
