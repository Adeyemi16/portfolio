import React from 'react'
import "./scrollup.css"

export default function ScrollUp() {
    window.addEventListener("scroll", function(){
//when scroll is higher than 560 viewport height
        const scrollup = this.document.querySelector(".scrollup")
        if(this.scrollY >= 560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("show-scroll")
    })
  return (
    <a href="#" className='scrollup'>
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  )
}
