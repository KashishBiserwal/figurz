import { useParams } from 'react-router-dom';
import MarvelData from '../Marvel/MarvelData'
import DcData from '../DC/DcData'
import { useState } from 'react';
import AddToCart from '../Cart/AddToCart';
const data = MarvelData.concat(DcData);

const SingleProduct = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id === productId);
  const { name, price, img1, img2, img3, img4, stock } = product;
  const imageArray = [img1, img2, img3, img4]
  const [mainImage, setMainImage] = useState(imageArray[0]);
  return (
      <div className='single-product-page'>
        <div className='images'>
          <div className='all'>
            {
              imageArray.map((items, index)=> {
                return (
                  items && <img src={`images/products/${items}`} key={index} onClick={() => setMainImage(items)} alt='something'/>
                )
              })
            }
          </div>
          <div className='main'>
            <img src={`images/products/${mainImage}`} alt='something'/>
          </div>
        </div>
        <div className='details'>
          <h2 style={{textTransform: 'uppercase'}}>{name}</h2>
          <h4><span style={{color: '#01aade'}}>&#8377;{price}</span></h4>
          <p>Available:
            <span>{stock > 0 ? ' In Stock' : ' Not Available'}</span>
          </p>
          <hr style={{marginBottom: '1rem'}}/>
          {stock > 0 && <AddToCart product={product}/>}
        </div>
      </div>
  );
};

export default SingleProduct; 