import image from '../garden-images/n2.jpg'
import image1 from '../garden-images/n1.png'
import image2 from '../garden-images/n3.png'
import image3 from '../garden-images/n4.webp'
import image4 from '../garden-images/n5.jpg'
import image5 from '../garden-images/n6.webp'
import image6 from '../garden-images/n7.jpg'
import image7 from '../garden-images/n9.jpg'

const ProductHead = () => {
  return (
    <div className="container product__head-container">
        <h2>Shop Category</h2>

        <div className="product__head__detail">
            <article>
                <img src={image} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Loungers & daybed</button>
                </div>
            </article>


            <article>
                <img src={image1} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Solfa sets</button>
                </div>
            </article>


            <article>
                <img src={image2} alt="" /><div className="btn__button">
                    <button className='btn secondary__btn' >Corner Sets</button>
                </div>
            </article>

            <article>
                <img src={image3} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Fire Pit Sets</button>
                </div>
            </article>

            <article>
                <img src={image4} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Dinning Sets</button>
                </div>
            </article>

            <article>
                <img src={image5} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Pagolars Sets</button>
                </div>
            </article>

            <article>
                <img src={image6} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Contilever& parosols sets</button>
                </div>
            </article>

            <article>
                <img src={image7} alt="" />
                <div className="btn__button">
                    <button className='btn secondary__btn' >Bean Bags</button>
                </div>
            </article>
        </div>
    </div>
  )
}

export default ProductHead