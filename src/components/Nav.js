import React, { Component } from 'react'
import classnames from 'classnames'
import { ReactComponent as RingSVG } from '../assets/images/ring.svg'
import { ReactComponent as BraceletSVG } from '../assets/images/bracelet.svg'
import { ReactComponent as NecklaceSVG } from '../assets/images/necklace.svg'
import { ReactComponent as EarringSVG } from '../assets/images/earrings.svg'

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
      'borderRadius': `${size / 2}px`
    }
    return (
      <nav>
        {buttons
          .map((btn, i) => (
            <button
              style={btnStyles}
              className={classnames('btn', { selected: path === btn.name })}
              name={btn.name}
              onClick={this.handleClick}
              key={i}
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
