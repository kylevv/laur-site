import React, { Component } from 'react'
import classnames from 'classnames'
/* eslint-disable import/no-webpack-loader-syntax */
import RingSVG from '-!svg-react-loader!../assets/ring.svg'
import BraceletSVG from '-!svg-react-loader!../assets/bracelet.svg'
import NecklaceSVG from '-!svg-react-loader!../assets/necklace.svg'
import EarringSVG from '-!svg-react-loader!../assets/earrings.svg'

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
    return (
      <nav>
        <button className={classnames('btn', { selected: path === 'rings' })} name='rings' onClick={this.handleClick}>
          <RingSVG className='svg-icon' name='rings' width='40px' height='40px' />
        </button>
        <button className={classnames('btn', { selected: path === 'bracelets' })} name='bracelets' onClick={this.handleClick}>
          <BraceletSVG className='svg-icon' name='bracelets' width='40px' height='40px' />
        </button>
        <button className={classnames('btn', { selected: path === 'necklaces' })} name='necklaces' onClick={this.handleClick}>
          <NecklaceSVG className='svg-icon' name='necklaces' width='40px' height='40px' />
        </button>
        <button className={classnames('btn', { selected: path === 'earrings' })} name='earrings' onClick={this.handleClick}>
          <EarringSVG className='svg-icon' name='earrings' width='40px' height='40px' />
        </button>
      </nav>
    )
  }
}

export default Nav
