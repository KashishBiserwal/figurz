import { useParams } from 'react-router-dom';
import data from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id === productId);
  const { name, img, img2, img3, description, buy } = product;
  return (
      <div className='solo'>
        <div className='images'>
          <img className='image' src={img} alt=''/>
          <img className='image1' src={img2} alt=''/>
          <img className='image2' src={img3} alt=''/>
        </div>
        <div className='details'>
          <h1>{name}</h1>
          <br/>
          <p className='description'>{description}</p>
          <br/>
          <button className='amazon-btn btn'><a href={buy} target="_blank" rel='noreferrer'>Buy on Amazon</a></button>
        </div>
      </div>
  );
};

export default SingleProduct; 