import Button from '@material-ui/core/Button';

//types
import { CartItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';

type Props = {
  item : CartItemType;
  handleAddToCart : (clickedItem : CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const { id, title, price, category, description, image, quantity } = item;
  return (
    <Wrapper>
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-details">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price}
          <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
            {/* <AddShoppingCartIcon /> */}
            Add to cart
          </Button>
        </p>
      </div>
    </Wrapper>
  );
}


export default Item;