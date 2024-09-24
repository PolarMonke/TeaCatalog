import React, { Component } from 'react'
import { FiTrash2 } from "react-icons/fi";

export class Order extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img}></img>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price + " BYN"} - {this.props.item.number + "X"}</b>
        <FiTrash2 className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)}/>
      </div>
    )
  }
}

export default Order