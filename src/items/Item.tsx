import Button from '@material-ui/core/Button';

// types
import { CartItemType } from '../App';
// styles
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
        <h2 className="text-[#3f51b5]">{item.title}</h2>
        <p>{item.description}</p>
        <div className="mt-5">
          <p className="font-bold">Category: {item.category}</p>
          <p className="font-bold">Price: ${item.price}</p>
          <Button variant="contained" color="primary" onClick={() => handleAddToCart(item)}>
            {/* <AddShoppingCartIcon /> */}
            Add to cart
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}


export default Item;