import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="container footer__container">
        <article className="footer__detail">
            <h2>Never miss a deal</h2>
            <div className="footer__input">
                <input type="email"  placeholder='Your email'/>
            </div>
            <div className="footer__sm">
                <button className='btn footer__btn'>Sign Up</button>
            </div>
        </article>


         <article className="footer__detail">
            <h4>Never miss a deal</h4>
            <div className="footer__info">
            <p>Help & Info</p>
            <p>Contact Us</p>
            <p>Return & Delivery</p>
            <p>Terms & Condition</p>
            </div>
        </article>

        <article className="footer__detail">
            <h4>About Elements Outdoor Living</h4>
           <div className="footer__info">
             <p>About Us</p>
            <p>Blog</p>
            <p>Privacy & Cookies</p>
            <p>Catalogue 2025</p>
           </div>
        </article>

        <article className="footer__detail">
            <h4>Speak to the Team</h4>
            <div className="footer__info">
                
            <p>Elements Outdoor Living</p>
            <p>Call Us  Today: 07088294012</p>
            <p>adekoelijah@gmail.com</p>
            </div>
        </article>
    </div>
    </footer>
  )
}

export default Footer