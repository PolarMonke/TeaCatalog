import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'black',
                    name: 'Black'
                },
                {
                    key: 'green',
                    name: 'Green'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() =>  this.props.selectCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories