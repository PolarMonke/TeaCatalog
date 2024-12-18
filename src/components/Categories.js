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
                },
                {
                    key: 'red',
                    name: 'Red'
                },
                {
                    key: 'white',
                    name: 'White'
                },
                {
                    key: 'powder',
                    name: 'Powder'
                },
                {
                    key: 'herbal infusion',
                    name: 'Herbal infusion'
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

//Скраў кавун))))))))))))))
//З'еў кавун)))))))))))))))))))))))
// надеюсь это появилось

export default Categories