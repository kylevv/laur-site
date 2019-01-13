import React, { Component } from 'react'
import pkg from '../../package.json'

class Footer extends Component {
  render () {
    return (
      <footer>
        <div>
          <p>{'v' + pkg.version}</p>
          <p>{'Copyright © 2019'}</p>
        </div>
      </footer>
    )
  }
}

export default Footer
