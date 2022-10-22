import { useParams } from 'react-router-dom';
import products from '../data';
const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, image2, image3, name, description } = product;
  return (
    <section className='product'>
      <div className='product-images'>
        <img src={image} alt={name} className='one'/>
        <img src={image2} alt={name} className='two'/>
        <img src={image3} alt={name} className='three'/>
      </div>
      <div className='desc'>
        <h1>{name}</h1>
        <p>{description}</p>
        {/* <Link to='/'>back to products</Link> */}
        <button>Buy on Amazon</button>
      </div>
    </section>
  );
};

export default SingleProduct;

