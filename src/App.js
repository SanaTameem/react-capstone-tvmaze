import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ShowsContainer from './components/ShowsContainer';
import ShowDetails from './components/ShowDetails';

function App() {
  return(
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<ShowsContainer/>} />
      <Route path="/showDetails/:id" element={<ShowDetails/>} />
    </Routes>
    </div>
  )
}

export default App;
