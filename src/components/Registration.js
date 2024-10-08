import React, { Component } from 'react'

export class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: "",
      code: 0,
      enteredCode: '',
      error: null
    }
  }
  sendCode = () => {
    const phoneRegex = /^[+]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})$/
    if (phoneRegex.test(this.state.phone))
    {
      const minCeiled = Math.ceil(1000)
      const maxFloored = Math.floor(9999)
      const code = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
      this.setState({code, error: null })
      alert(code)
    }
    else {
      this.setState({error: "Please enter a valid phone number"})
    }
  }
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value, error: null })
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.sendCode();
    }
  }
  handleCodeChange = (event) => {
    this.setState({ enteredCode: event.target.value, error: null });
  }
  saveCartToJSON = () => {
    const shoppingCart = this.props.shoppingCart || [];
    const jsonCart = JSON.stringify(shoppingCart)
    localStorage.setItem("shoppingCart", jsonCart)
  }
  handleOrder = () => {
    if (this.state.enteredCode === this.state.code.toString()) {
      this.saveCartToJSON();
      this.props.emptyShoppingCart();
    } else {
      this.setState({ error: 'Incorrect code' });
    }
  }
  
  
  render() {
    return (
      <div className='registration'>
        <div className='reg-text'>Your phone number:</div>
        <input className='phone'
        onChange={this.handlePhoneChange} 
        //onKeyDown={this.handleKeyDown} FIXME
        >
        </input>
        <div className='submit'
        onClick={this.sendCode}
        onKeyDown={this.handleKeyDown}
        >Send code</div>
        <div className='reg-text'>Code that we sent you:</div>
        <input className='code' value={this.state.enteredCode}
        onChange={this.handleCodeChange} />
        <div className='submit' onClick={this.handleOrder}>Order</div>
        {this.state.error && <div className="error">{this.state.error}</div>}
      </div>
    )
  }
}

export default Registration