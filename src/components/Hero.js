import { useParams } from 'react-router-dom';
import Marveldata from '../Marvel/MarvelData'
import Dcdata from '../DC/DcData'
import Product from '../components/Product';

const data = Marveldata.concat(Dcdata);

const Hero = () => {
  const { hero } = useParams();
  const product = data.filter((product) => product.hero === hero);
  console.log(product);
  return (
    <div>
      <img src={`images/${hero}.jpg`} alt='no hero banner' className='hero-banner'></img>
      <h2 className='hero-title'>{`${hero} Merchandise`}</h2>
      <div className='hero-products'>
      {product.map((item) => (
        <Product key={item.id} {...item}/>
      ))}
      </div>
    </div>
  );
};

export default Hero; 