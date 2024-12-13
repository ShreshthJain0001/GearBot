import React from 'react'
import './CSS/support_footer.css'
import BackToTopButton from './BackToTopButton'
import { FaFacebook, FaWhatsapp ,FaInstagram} from 'react-icons/fa'
function Support_Footer() {
  return (
    <>

     <BackToTopButton/>
     <div id='footer' className='footercontent'>
      <div id='AboutUs'className='content'><a href=''>About Us</a></div>
      <div id='connectwithus' className='content'> Connect with us<br/>
      <div className='socialicons'>
       <a href='https://www.facebook.com/shreshth.jain.353/' target='#'><FaFacebook className='icon'/></a>
        <a href='#'><FaInstagram className='icon'/></a>
        <a href='https://wa.me/9828967068' target='#'><FaWhatsapp className='icon'/></a>
      </div>
      </div>
      <div id='Let us Help you' className='content'><a href=''>Let us help you</a></div>
     </div>
     <div id='copyright'>Gearbot ©2024 Shreshth Manhani pvt. ltd. All rights reserved.</div>
    </>
  )
}

export default Support_Footer
