import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { contenidos } from './Content/content'
// import { AvisoPrivacidad } from "./Content/content";

class Header extends Component {
  render () {
    const enseñar = contenidos.map((elem, index) => {
      return (
        <li key={index}><a href='javascript:;' onClick={() => { this.props.onOpenArticle(elem.name) }}>{elem.title}</a></li>
      )
    })
    return (
      <header id='header' style={this.props.timeout ? { display: 'none' } : {}}>
        <div className='logo'>
          <span className='icon fa-crop' />
        </div>
        <div className='content'>
          <div className='inner'>
            <h1>Laboratorio de Análisis y Control Especializado, S.A. de C.V. (LACESA)</h1>
          </div>
        </div>
        <nav>
          <ul>
            {enseñar}
            <li><a href='javascript:;' onClick={() => { this.props.onOpenArticle('contact') }}>Contacto</a></li>
          </ul>
        </nav>
      </header>

    )
  }
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Header
