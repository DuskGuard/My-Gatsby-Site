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
           <p> I am a Full-Stack Development Student from the Locally-Renowned <a href="https://www.evolveu.ca/about">Evolve-U</a> Full-Stack Development Program located in Calgary. I come from backgrounds in Private Investigations and Mental Health, 
           with Entrepreneurial Experience in Operating my own Business. At 20 Years Old i have Accomplished a lot from founding and operating 
           my own Company "On-The-Spot Detailing" in YYC/Okotoks to Beating Stage-3 Colorectal Cancer during my High-School Career;
            Persistence and Ambition go hand-in-hand for me. I am Eager to Learn and Even More Eager to Contribute to a Team who 
            wants to make a Genuine & Positive Difference in people's lives and the World as a Whole!
           </p>
              <p>To Find Out More About Me Check Out My <a href="https://www.linkedin.com/in/trent-apt/">LinkedIn Account</a></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={code} alt="" /></span>
          <p> Prior to <a href="https://www.evolveu.ca/about">Evolve-U</a> I had some Minor Wordpress Experience and Basic Graphic-Design Experience, 
              but nothing else. Whereas Compared to the Present Day where I
              have an intermediate understanding of HTML 5, CSS, Vanilla JavaScript and React with an adept understanding of Python and Gatsby.
               I have designed all of my Projects Using Sketching and Wireframes to Conceptualize my Design Ideas. I am able to bring a Strong Design aspect to the team
               coupled with my Creative Problem-Solving Skills and Solid Technical Capabilities, if you like thinking of new and exciting ideas I
               would love to hear them! I work best in an enthusiastic team of whom i have built/can build an intimate relationship with of whom I 
               share common values.
          </p>
            <p>To See Some of My Work Check Out My <a href="https://github.com/DuskGuard">  Git-Hub Account!</a></p>
          {close}
        </article>

        <article id="rainforest" className={`${this.props.article === 'rainforest' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Rainforest Alberta</h2>
          <span className="image main"><img src={rain} alt="" /></span>
          <p>As an Entrepreneur myself, I Strongly believe in what the Alberta Rainforest is trying to do in Calgary. I Myself am YYC Born and I Believe
             that Calgary is Entering the ‘Golden-Age of Economic Diversity’, but that is only made Possible if Everyone does Their Part to Contribute!
            Ideally I Would Like to be a part of/found an Initiative to Help At-Risk Youth who've been Through Traumatic Experiences back on The Path
             in Life that they are Meant to be on, Rather than The Path that they are Currently on. Everyone deserves a chance at Redemption,
              Regardless of Circumstance, Especially Youth. I believe that entrepenurialship and giving back go hand-in-hand,
               otherwise it's just another way to earn guilty money; and there's enough of that. I believe that Calgary has a lot of Potential 
               for Cultural and Technological Growth and I Will Happily do My Part to Make That Vision a Reality!
          </p>
          <p>If You Havent Already, Sign<a href="https://www.rainforestab.ca/"> The Social Contract!</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h2 style={{textTransform:"capitalize"}}>Email Me At <i style={{textTransform:"lowercase"}}>trentapt@gmail.com</i></h2>
          <br/>
          <h2 style={{textTransform:"capitalize"}}>Or Contact Me On My Social Media Below!</h2>
          <hr/>
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