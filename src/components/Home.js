import React, { Component } from 'react'
import { ReactComponent as LambtwistSVG } from '../assets/images/lambtwist.svg'
import pkg from '../../package.json'

class App extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.match.path !== nextProps.match.path
  }

  handleClick (route) {
    this.props.history.push('/' + route)
  }

  render () {
    return (
      <div>
        <header>
          <div className='row'>
            <div className='lambtwist col'>
              <LambtwistSVG className='svg-icon' />
            </div>
            <div className='col'>
              <div className='name'>Laurie MacAdam</div>
              <div className='title'>Jewelry</div>
            </div>
            <div className='lambtwist reverse col'>
              <LambtwistSVG className='svg-icon' />
            </div>
          </div>
        </header>
        <main>
          <div className='home-nav-btn home-nav-btn--rings' onClick={this.handleClick.bind(this, 'rings')}>
            <div className='btn-text'>Rings</div>
          </div>
          <div className='home-nav-btn home-nav-btn--bracelets' onClick={this.handleClick.bind(this, 'bracelets')}>
            <div className='btn-text'>Bracelets</div>
          </div>
          <div className='home-nav-btn home-nav-btn--necklaces' onClick={this.handleClick.bind(this, 'necklaces')}>
            <div className='btn-text'>Necklaces</div>
          </div>
          <div className='home-nav-btn home-nav-btn--earrings' onClick={this.handleClick.bind(this, 'earrings')}>
            <div className='btn-text'>Earrings</div>
          </div>
        </main>
        <footer>
          <div>{'v' + pkg.version}</div>
        </footer>
      </div>
    )
  }
}

export default App
