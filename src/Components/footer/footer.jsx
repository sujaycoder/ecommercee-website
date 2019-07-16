import React, {Component} from 'react'
import fb_icon from './fb_icon.svg'
import tweet_icon from './tweet_icon.svg'
import insta_icon from './insta_icon.svg'
import './footer.css'
import arrow from './arrow.svg'
import './footer_effect.js'


const Footersection = ()=>{
    return(
        <div className="footer">
            <form className="response_form">
                <input type="text" name="res_form_fullname" placeholder="Full Name"/>
                <input type="email" name="res_form_email" placeholder="Email"/>
                <textarea type="textarea" name="res_form_response" rows='5' cols='25' placeholder="Enter Your Response"> 
                
                </textarea>
                <button type='submit'>Response</button>
                </form>
            <div className="follow">
                <p>Follow Us</p>
                <img src={fb_icon} alt="facebook"/>
                <img src={tweet_icon} alt="icon"/>
                <img src={insta_icon} alt="instagram"/>
            </div>
            <a href="#"><img src={arrow} alt="arrow"/></a>
        </div>

    )
}


class Footer extends Component {
    state = {  }
    render() { 
        return (  

            <section id="footersection">
                <Footersection/>
            </section>

        );
    }
}
 
export default Footer;