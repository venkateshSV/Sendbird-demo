import React from 'react';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>SendBird Chat Application</h1>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
