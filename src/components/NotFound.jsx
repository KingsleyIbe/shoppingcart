import { Link } from 'react-router-dom';
import '../assets/styles/notfound.css';

const NotFound = () => (
  <div className="not-found">
    <h1 className="font-bold text-[40px]">404</h1>
    <Link to="/">Back to Home Page</Link>
  </div>
);

export default NotFound;
