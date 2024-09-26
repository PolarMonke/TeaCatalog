import React, { Component } from 'react'

export class Registration extends Component {
  render() {
    return (
      <div className='registration'>
        <div className='reg-text'>Your phone number:</div>
        <input className='phone'></input>
        <div className='submit'>Send code</div>
        <div className='reg-text'>Code that we sent you:</div>
        <input className='code'></input>
        <div className='submit' disabled>Order</div>
      </div>
    )
  }
}

export default Registration