import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { AvisoPrivacidad } from "./Content/content";
import MDReactComponent from 'markdown-react-js';
import {contenidos}  from './Content/content';

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'


class Main extends Component  {  

  render() {
    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    const infoToShow = contenidos.map( (elem, index) => {
      return (
        <div key={index}>
          <article id={elem.name}  className={`${this.props.article === elem.name ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{elem.title}</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p><MDReactComponent text={elem.content}></MDReactComponent> </p>
          {close}
          </article>
        </div>
      )
    })


    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

       <div>
          {infoToShow}
       </div>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter fa-5x" ><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook fa-5x"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram fa-5x"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main