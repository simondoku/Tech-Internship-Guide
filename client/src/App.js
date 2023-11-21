import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TabGroup } from './components/Tab';
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="container-fluid min-vh-100 bg-secondary">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/resources' element={<TabGroup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
