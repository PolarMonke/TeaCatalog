import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import itemsData from "./data/items.json"; 
import Registration from "./components/Registration";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: []
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.order = this.order.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
    this.search = this.search.bind(this)
  }
  componentDidMount() {
    this.setState({ items: itemsData }); 
    this.setState({ currentItems: itemsData });
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} search={this.search}
        onDelete={this.deleteOrder} onOrder={this.order}/>
        <Categories selectCategory={this.selectCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    )
  }
  search(name) {
    if (name === "") {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.title.toLowerCase().includes(name.toLowerCase()) )
    })
  }
  selectCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  order() {
    alert("ordered")
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
