import React, { Component } from 'react'
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
            <div className='laur col' onClick={this.handleClick.bind(this)}>LAUR</div>
            <Nav history={this.props.history} match={this.props.match} />
          </div>
        </header>
        <Gallery match={this.props.match} key={this.props.match} />
        <footer>
          <div>{'v' + pkg.version}</div>
        </footer>
      </div>
    )
  }
}

export default App
