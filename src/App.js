import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddPost from './components/AddPost';
import ViewPost from './components/ViewPost';
import ViewOwnPost from './components/ViewOwnPost';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/add' element={<AddPost/>} />
          <Route path='/view' element={<ViewPost/>} />
          <Route path='/viewown' element={<ViewOwnPost/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
