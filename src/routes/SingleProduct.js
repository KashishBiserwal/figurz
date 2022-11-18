import { useParams } from 'react-router-dom';
import MarvelData from '../Marvel/MarvelData'
import DcData from '../DC/DcData'

const data = MarvelData.concat(DcData);

const SingleProduct = () => {
  const { productId } = useParams();
  const product = data.find((product) => product.id === productId);
  const { name, price } = product;
  return (
      <div>
        <h2>{name}</h2>
        <h4>{price}</h4>
      </div>
  );
};

export default SingleProduct; 