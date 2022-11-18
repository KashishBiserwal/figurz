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
      <img src={`images/${hero}.jpg`} alt='no hero banner'></img>
      {product.map((item) => (
        <Product key={item.id} {...item}/>
      ))}
    </div>
  );
};

export default Hero; 