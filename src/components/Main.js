import React from 'react'
import PropTypes from 'prop-types'
import { AvisoPrivacidad } from "./Content/content";
import MDReactComponent from 'markdown-react-js';


import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Misión y Visión</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Desarrollar el Análisis de agua, alimentos en general, para cada uno de nuestros clientes ofreciendo un resultado veraz y oportuno de alta calidad, a través de un servicio amable, puntual. Obteniendo la satisfacción de nuestros clientes y el crecimiento de nuestra empresa.</p>
          {close}
        </article>

        <article id="intro" className={`${this.props.article === 'nosotros' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Nosotros</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Laboratorio de Análisis y Control Especializado, S.A. de C.V. (LACESA), está ubicado actualmente en calle Sabancuy #22 región 98 Fracc. Ah Kimpech Cancún, Q. Roo. Inició sus actividades en marzo de 1974 en la Cd. de México, con el nombre de Laboratorio de Control Especializado SA de CV, siendo nuestro fundador el Dr. Ricardo Olmedo Salido quién es egresado del Instituto Politécnico Nacional.</p>
          <p>Nuestro objetivo es efectuar análisis Físico-Químicos y Microbiológicos de materias primas, productos acabados, alimentos, agua para la Industria y Empresas que requieren control de calidad o cumplir con la normatividad. LACESA cuenta con personal especializado y de probada experiencia, ofreciendo a todos nuestros clientes el mejor servicio con soluciones integrales y de alta calidad, proporcionando la mejor asesoría sobre las alternativas técnicas, económicas y legales en nuestra materia.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.</p>
          <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat tempus.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">{AvisoPrivacidad.title}</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <MDReactComponent text={AvisoPrivacidad.content}></MDReactComponent>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
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