import { useState } from 'react';
import { useQuery } from 'react-query';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Item from './items/Item';
import Cart from './cart/Cart';

//styles
import { Wrapper, StyledButton } from './App.styles';

// tpyes
export type CartItemType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  amount: number;
}

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const getTotalItems = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === clickedItem.id);
      if (existingItem) {
        return prevItems.map(item => item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item);
      } else {
        return [...prevItems, { ...clickedItem, amount: 1 }];
      }
    }
    );
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.reduce((ack, item) => {
      if (item.id === id) {
        if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
      } else {
        return [...ack, item];
      }
    }, [] as CartItemType[]));
  }

  isLoading && <LinearProgress />;
  error && <div>Something went wrong! Try again</div>;
  return (
    <Wrapper>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setIsOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="secondary">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data && data.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
