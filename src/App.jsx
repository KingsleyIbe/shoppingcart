import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import MainApp from './MainApp.tsx';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainApp} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </Router>
);

export default App;
