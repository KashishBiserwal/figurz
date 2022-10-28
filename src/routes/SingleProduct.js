import { useParams } from 'react-router-dom';
import marveldata from '../marveldata';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = marveldata.find((product) => product.id === productId);
  const { name, img, description } = product;
  return (
      <div className='solo'>
        <div className='images'>
          <img className='image' src={img} alt=''/>
          <img className='image1' src={img} alt=''/>
          <img className='image2' src={img} alt=''/>
        </div>
        <div className='details'>
          <h1>{name}</h1>
          <br/>
          <p>{description}</p>
          <br/>
          <button className='amazon-btn btn'>Buy on Amazon</button>
        </div>
      </div>
  );
};

export default SingleProduct; 