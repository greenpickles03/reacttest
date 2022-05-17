
import './App.css';
import HomePage from './component/view/HomePage';
import CreateUser from './component/view/CreateUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/createUser' element={<CreateUser />} />
        </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
