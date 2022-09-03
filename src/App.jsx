import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import MainApp from './MainApp.tsx';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<MainApp />} />
      <Route path="/not-found" element={<NotFound />} />
      {/* <Navigate to="/not-found" replace /> */}
      <Route path="*" element={<Navigate replace to="/not-found" />} />
    </Routes>
  </Router>
);

export default App;
