import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (

  <footer id='footer' date={props.date} style={props.timeout ? { display: 'none' } : {}}>
    <p>
        LACESA
        Cancún, Quintana Roo a {props.date.toLocaleDateString()}
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
