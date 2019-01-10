import React, { Component } from 'react'
import LambtwistSVG from './LambtwistSVG'
import Nav from './Nav'
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
            <div onClick={this.handleClick.bind(this)} className='lambtwist col' dangerouslySetInnerHTML={{ __html: LambtwistSVG() }} />
            <div className='col'>
              <div className='name'>Laurie MacAdam</div>
              <div className='title'>Jewelry</div>
            </div>
            <div className='lambtwist reverse col' dangerouslySetInnerHTML={{ __html: LambtwistSVG() }} />
          </div>
        </header>
        <Nav history={this.props.history} match={this.props.match} size={300} perCol={2} />
        <main />
        <footer>
          <div>{'v' + pkg.version}</div>
        </footer>
      </div>
    )
  }
}

export default App
