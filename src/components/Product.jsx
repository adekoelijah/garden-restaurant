import React from 'react'

import image from '../garden-images/n2.jpg'
import image1 from '../garden-images/n1.png'
import image2 from '../garden-images/n3.png'
import image3 from '../garden-images/n5.jpg'
import image4 from '../garden-images/n4.webp'
import image5 from '../garden-images/n6.webp'
import image6 from '../garden-images/n7.jpg'
import image7 from '../garden-images/n8.jpeg'
import image8 from '../garden-images/n9.jpg'

const Product = () => {
  return (
    <div className="product">
        <div className="container product__container">
            <h2>Our Best Sellers</h2>
            <div className="product__details">
                <article>
                    <img src={image} alt="" />

                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>


                <article>
                    <img src={image1} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>


                <article>
                    <div className="image__btn">
                        <img src={image2} alt="" />
                        <button className='btn sales__btn'>sales</button>

                    </div>
                    
                   
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>

                <article>
                    <div className="image__btn">
                        <img src={image3} alt="" />
                        <button className='btn sales__btn'>sales</button>

                    </div>
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>

                <article>
                    <img src={image4} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>


                <article>
                    <img src={image5} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>

                  <article>
                    <img src={image6} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>


                  <article>
                    <img src={image7} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>

                  <article>
                    <img src={image8} alt="" />
                    <p>Lexx 8 seater bar set</p>
                    <h4>£14, 3780</h4>

                </article>
            </div>
        </div>
    </div>
  )
}

export default Product