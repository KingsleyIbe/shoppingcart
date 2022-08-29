import CardItem from "../cartItem/CartItem";
//styles
import { Wrapper } from "./Cart.styles";
//types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
  return (
    <Wrapper>
      <h2 className="text-[#3f51b5] font-bold">Your shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : ( null)} 
      {cartItems?.map(item => (
        <CardItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={() => removeFromCart(item.id)}
        />
      ))}
      <p className="text-[#3f51b5] font-bold">Total items: {getTotalItems(cartItems).toFixed(2)}</p>
    </Wrapper>
  );
}

export default Cart;
