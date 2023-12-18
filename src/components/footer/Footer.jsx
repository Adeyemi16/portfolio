import React from 'react'
import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container contain">
            <h1 className="footer__title">Adeyemi</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.instagram.com/owodunni.adeyemi?igshid=NGVhN2U2NjQ0Yg==" className='footer__social-link'>
          <i className="uil uil-instagram"></i>
          </a>

          <a href="https://x.com/JAdeyemi21?t=lcke7AufDTYOQbMnUCYeNA&s=09" className='footer__social-link'>
            <i className='uil uil-twitter-alt'></i>
          </a>

          <a href="https://github.com/Adeyemi16" className='footer__social-link'>
              <i className="uil uil-github-alt"></i>
          </a>
            </div>
            <span className='footer__copy'>
                &#169; Owodunni Adeyemi. All rights reserved.
            </span>
        </div>
    </footer>
  )
}
