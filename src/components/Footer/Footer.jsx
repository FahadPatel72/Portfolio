import React from 'react'
import '../Footer/Footer.css'
import user_icon from '../../assets/user_icon.svg'
import avatar from '../../assets/Avatars1.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img className='logo-icon' src={avatar} alt="" />
            
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" name="email"  placeholder='Enter your email'/>
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bootom-left'>© 2024 Fahad Patel. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
