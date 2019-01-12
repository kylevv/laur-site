import React, { Component } from 'react'
import { ReactComponent as LambtwistSVG } from '../assets/images/lambtwist.svg'
import Nav from './Nav'
import Gallery from './Gallery'
import pkg from '../../package.json'

class App extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return this.props.match.path !== nextProps.match.path
  }

  handleClick () {
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <header>
          <div className='row'>
            <div className='lambtwist col' onClick={this.handleClick.bind(this)}>
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
        <Nav history={this.props.history} match={this.props.match} />
        <Gallery match={this.props.match} key={this.props.match} />
        <footer>
          <div>{'v' + pkg.version}</div>
        </footer>
      </div>
    )
  }
}

export default App
