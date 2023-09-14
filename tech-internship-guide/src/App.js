import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="container-fluid min-vh-100 bg-secondary">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
