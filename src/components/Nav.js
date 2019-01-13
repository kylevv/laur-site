import React, { Component } from 'react'
import classnames from 'classnames'
import { ReactComponent as RingSVG } from '../assets/images/ring.svg'
import { ReactComponent as BraceletSVG } from '../assets/images/bracelet.svg'
import { ReactComponent as NecklaceSVG } from '../assets/images/necklace.svg'
import { ReactComponent as EarringSVG } from '../assets/images/earrings.svg'
import { ReactComponent as ChevronSVG } from '../assets/images/down-chevron.svg'

const routes = [
  { name: '/rings', label: 'Rings', svg: RingSVG },
  { name: '/bracelets', label: 'Bracelets', svg: BraceletSVG },
  { name: '/necklaces', label: 'Necklaces', svg: NecklaceSVG },
  { name: '/earrings', label: 'Earrings', svg: EarringSVG }
]

class Nav extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick (ev) {
    this.props.history.push(ev.target.name)
  }

  handleChange (ev) {
    this.props.history.push(ev.target.value)
  }

  render () {
    const path = this.props.match.path
    const current = routes.filter((route) => path === route.name)[0]
    return (
      <nav>
        <div className='row nav-btn-container'>
          {routes
            .map((route, i) => (
              <button
                className={classnames('btn', { selected: path === route.name })}
                name={route.name}
                onClick={this.handleClick}
                key={i}
              >
                <route.svg className='svg-icon' />
              </button>
            ))
          }
        </div>
        <div className='row nav-select-container'>
          <div className='nav-select-wrapper'>
            <select onChange={this.handleChange} defaultValue={current.name}>
              {routes
                .map((route, i) => (
                  <option key={i} value={route.name}>{route.label}</option>
                ))
              }
            </select>
          </div>
          <div className='nav-select-selection'>
            <current.svg className='svg-icon' />
            <ChevronSVG className='dropdown-svg' />
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
