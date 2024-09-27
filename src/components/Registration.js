import React, { Component } from 'react'

export class Registration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: "",
      code: 0
    }
  }

  sendCode = () => {
    const phoneRegex = /^[+]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{3})[-. ]?(\d{2})[-. ]?(\d{2})$/
    if (phoneRegex.test(this.state.phone))
    {
      const minCeiled = Math.ceil(1000)
      const maxFloored = Math.floor(9999)
      const code = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
      this.setState({code})
    }
    else {
      alert('Please enter a valid phone number ');
    }
  }

  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value })
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.sendCode();
    }
  }

  render() {
    return (
      <div className='registration'>
        <div className='reg-text'>Your phone number:</div>
        <input className='phone'
        onChange={this.handlePhoneChange} 
        onKeyDown={this.handleKeyDown}></input>
        <div className='submit'
        onClick={this.sendCode}
        onKeyDown={this.handleKeyDown}
        >Send code</div>
        <div className='reg-text'>Code that we sent you:</div>
        <input className='code' value={this.state.code || ''} />
        <div className='submit' disabled>Order</div>
      </div>
    )
  }
}

export default Registration