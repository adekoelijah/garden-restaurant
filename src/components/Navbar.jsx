import React from 'react'
import image1 from '../garden-images/mark.png'
import image2 from '../garden-images/person.png'
import image3 from '../garden-images/cart.png'





export const Navbar = () => {
  return (
    <nav>
        <ul className="nav__links">
          <div className="logo">
            <h4>Adeko</h4>
            <div className="btn logo__btn">Home Garden</div>
          </div>
          <li className='nav__list'>
            <a href="#/" className='product__icon'>Product <span><img className='icon' src={image1} alt="" /></span></a>
            <input type="search" name="" id="" className='btn search__btn'  placeholder='What are you looking for ?'/>
            <a href="#/"> Call Us Today : 07088294012</a>
            <a href="/"> <img className='icon' src={image2} alt="" /></a>
            <a href="#/"> <img className='icon' src={image3} alt="" /></a>
          </li>
        </ul>
    </nav>
  )
}
