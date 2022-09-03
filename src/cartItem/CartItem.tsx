import Button from '@material-ui/core/Button';
// types
import { CartItemType } from '../MainApp';
// styles
import { Wrapper } from './CartItem.styles';

type Props = {
  item : CartItemType;
  addToCart : (clickedItem : CartItemType) => void;
  removeFromCart : (id : number) => void;
};

const CardItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { id, title, price, category, description, image, quantity } = item;
  return (
    <Wrapper>
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <h2 className="text-[#3f51b5]">{item.title}</h2>
        <div className="information">
          <p>{item.description}</p>
          <div className="mt-2">
            <p className="font-bold">Category: {item.category}</p>
            <p className="font-bold">Price: ${item.price}</p>
            <p className="font-bold">Total: ${(item.quantity * item.price).toFixed(2)}</p>
          </div>
        </div>
        <div className="buttons">
          <Button variant="contained" color="primary" size="small" disableElevation onClick={() => removeFromCart(item.id)}>
            -
          </Button>
          <p>{item.quantity}</p>
          <Button variant="contained" color="primary" size="small" disableElevation onClick={() => addToCart(item)}>
            +
          </Button>
        </div>
        
      </div>
    </Wrapper>
  );
}

export default CardItem;
