import Button from '@material-ui/core/Button';
// types
import { CartItemType } from '../App';
// styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item : CartItemType;
  addToCart : (clickedItem : CartItemType) => void;
  removeFromCart : (id : number) => void;
};

const CardItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { id, title, price, category, description, image, amount } = item;
  return (
    <Wrapper>
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="item-details">
        <h2>{item.title}</h2>
        <div className="information">
          <p>{item.description}</p>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button variant="contained" color="primary" size="small" disableElevation onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>${item.amount}</p>
          <Button variant="contained" color="primary" size="small" disableElevation onClick={() => addToCart(item)}>
            +
          </Button>
        </div>
        
      </div>
    </Wrapper>
  );
}

export default CardItem;
