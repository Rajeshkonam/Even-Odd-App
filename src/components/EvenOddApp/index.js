import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  random = () => Math.ceil(Math.random() * 100)

  inc = () => {
    const randomNUm = this.random()
    this.setState({count: randomNUm})
  }

  render() {
    const {count} = this.state
    const num = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="c1">
        <div className="c2">
          <h1 className="h1">Count {count}</h1>
          <p className="p1">Count is {num}</p>
          <button type="button" onClick={this.inc} className="b1">
            Increment
          </button>
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
