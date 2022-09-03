import { Link } from 'react-dom';
import '../assets/styles/notfound.css';

const NotFound = () => (
  <div className="not-found">
    <div>
      <h1>Page not found</h1>
      <Link to="/">Back to Home Page</Link>
    </div>
  </div>
);

export default NotFound;
