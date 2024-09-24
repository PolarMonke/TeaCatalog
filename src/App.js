import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Green tea",
          img: "green_tea.jpg",
          desc: "adasafewfewfwefwfewffw\nfewffwefgregergaergag",
          category: "green",
          price: 10.00,
          number: 1
        },
        {
          id: 2,
          title: "Black tea",
          img: "black-tea.png",
          desc: "adasafewfewfwefwfewffw\nfewffwefgregergaergag",
          category: "black",
          price: 10.00,
          number: 1
        },
        {
          id: 3,
          title: "Mactha tea",
          img: "matcha-tea.jpg",
          desc: "adasafewfewfwefwfewff\nwfewffwefgregergaergag",
          category: "powder",
          price: 10.00,
          number: 1
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.order = this.order.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} onOrder={this.order}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }
  order() {
    this.setState({ orders: [] })
  }
  deleteOrder(id) {
    const updatedOrders = this.state.orders.map(order => {
      if (order.id === id) {
        const newOrder = { ...order, number: order.number - 1, price: order.price - order.price / order.number };
        if (newOrder.number === 0) {
          return null;
        } 
        else {
          return newOrder;
        }
      }
      else {
        return order;
      }
    });
    const filteredOrders = updatedOrders.filter(order => order !== null);
    this.setState({ orders: filteredOrders });
  }
  addToOrder(item) {
    let isInArray = false
    const updatedOrders = this.state.orders.map(order => {
      if (order.id === item.id) {
        isInArray = true;
        const newOrder = { ...order, number: order.number + item.number, price: order.price + item.price };
        return newOrder;
      }
      else {
        return order;
      }
    });
  
    if (!isInArray) {
      updatedOrders.push({ ...item, number: item.number, price: item.price });
    }
  
    this.setState({ orders: updatedOrders });
  }
}

export default App;
