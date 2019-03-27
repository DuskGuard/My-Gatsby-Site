import React from 'react'
import PropTypes from 'prop-types'

import cal from '../images/cal.jpg'
import rain from '../images/rain.png'
import code from '../images/code.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={cal} alt="" /></span>
           <p> I am a Full-Stack Development Student from the Locally-Renowned <a href="https://www.evolveu.ca/about">Evolve-U</a> program located in Calgary. 
             I come from backgrounds in Private Investigations and Mental Health, with Entrupenurial Experience in Operating my own Business.
              At 20 Years Old i have Accomplished alot from Founding my own Company "On-The-Spot Detailing" in YYC/Okotoks to Beating Stage-3 Colorectal Cancer 
              during my High-School Career; Persistance and Ambition go hand-in-hand for me. I am Eager to Learn and Even More Eager to Contribute to a Team who
              wants to make a Genuine & Positive Differnce in people's lives and Alberta as a whole.</p>
              <p>To Find Out More About Me Check Out My <a href="https://www.linkedin.com/in/trent-apt/">LinkedIn Account</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={code} alt="" /></span>
          <p> Prior to <a href="https://www.evolveu.ca/about">Evolve-U</a> i had some Minor Wordpress Experience and Basic Graphic-Design Experience, but nothing else. Whereas Compared to the Present Day where I 
            have an intermediate understanding of HTML 5, CSS, Vanilla JavaScript and React with an adept understanding of Python and Gatsby. I have designed 
            all of my Projects Using Sketching and Wireframes to Conceptualize my Design Ideas. I hope to be able to bring a Strong Design aspect to the team 
            coupled with my Creative Problem-Solving Skills and Solid Technical Capabilities, it's worth noting that i work best in an Agile Work Environment 
            with an Enthusiastic Team Supporting me. </p>
            <p>To See Some of My Work Check Out My <a href="https://github.com/DuskGuard">  Git-Hub Account!</a></p>
          {close}
        </article>

        <article id="rainforest" className={`${this.props.article === 'rainforest' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Rainforest Alberta</h2>
          <span className="image main"><img src={rain} alt="" /></span>
          <p>As an Entrepenur myself I Strongly believe in what the Alberta Rainforest is trying to do in Calgary. I am YYC Born Myself and I Believe that
           Calgary is Entering the Golden-Age of Economic Diversity, but That is Only Possible if Everyone does Their Part to Contribute. Ideally I Would Like to be a part 
           of/found an Initative to Help At-Risk Youth who've been Through Tramatic Experiences back on The Path That They are Meant to be on, Rather than The Path they are Currently on.
           But at the core i believe that Calgary has alot of Potential for Cultural and Technological Growth and I Will Happilly do My Part to Make That Vision a Reality.
          </p>
          <p>If You Havent Already, Sign<a href="https://www.rainforestab.ca/"> The Social Contract!</a></p>
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
            <li><a href="https://www.linkedin.com/in/trent-apt/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://www.instagram.com/prettygood_guy/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="https://github.com/DuskGuard" className="icon fa-github"><span className="label">GitHub</span></a></li>
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