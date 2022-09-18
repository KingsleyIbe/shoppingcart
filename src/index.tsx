// import { any } from 'prop-types';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';
import './index.css';

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
);
