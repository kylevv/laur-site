import React, { Component } from 'react'
import classnames from 'classnames'
/* eslint-disable import/no-webpack-loader-syntax */
import RingSVG from '-!svg-react-loader!../assets/ring.svg'
import BraceletSVG from '-!svg-react-loader!../assets/bracelet.svg'
import NecklaceSVG from '-!svg-react-loader!../assets/necklace.svg'
import EarringSVG from '-!svg-react-loader!../assets/earrings.svg'

const buttons = [
  { name: 'rings', svg: RingSVG },
  { name: 'bracelets', svg: BraceletSVG },
  { name: 'necklaces', svg: NecklaceSVG },
  { name: 'earrings', svg: EarringSVG }
]

class Nav extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (ev) {
    this.props.history.push('/' + ev.target.name)
  }

  render () {
    const path = this.props.match.path.slice(1)
    const size = this.props.size || 80
    const btnStyles = {
      width: `${size}px`,
      height: `${size}px`,
      'border-radius': `${size / 2}px`
    }
    return (
      <nav>
        {buttons
          .map((btn) => (
            <button
              style={btnStyles}
              className={classnames('btn', { selected: path === btn.name })}
              name={btn.name}
              onClick={this.handleClick}
            >
              <btn.svg
                className='svg-icon'
                name={btn.name}
                width={`${size / 2}px`}
                height={`${size / 2}px`}
              />
            </button>
          ))
        }
      </nav>
    )
  }
}

export default Nav
