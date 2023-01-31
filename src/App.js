import { Route, Routes } from 'react-router-dom';
import './App.css';
import Edit from './components/Edit';
import Home from "./components/Home";
import Insert from './components/Insert';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/insert" element={<Insert />} />
        <Route path="/edit/:ids" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
