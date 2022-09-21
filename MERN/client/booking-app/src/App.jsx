import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Hotel from './pages/Hotel';
import List from './pages/List';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/hotels' element={<List/>} />
          <Route path='/hotels/:id' element={<Hotel/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
