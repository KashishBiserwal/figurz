import { useParams } from 'react-router-dom';
import data from '../Marvel/MarvelData'
import Product from '../components/Product';

const Hero = () => {
  const { hero } = useParams();
  const product = data.filter((product) => product.hero === hero);
  console.log(product);
  return (
      product.map((item) => (
        <Product key={item.id} {...item}/>
      ))
  );
};

export default Hero; 