import About from './components/About';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/About' element={<About/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
