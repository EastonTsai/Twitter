import 'bootstrap/dist/css/bootstrap-grid.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminPage, RegisterPage, LoginPage, HomePage } from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='admin' element={<AdminPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='home' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
