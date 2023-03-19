import "bootstrap/dist/css/bootstrap-grid.min.css"
import "App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "pages/AdminPage"
import HomePage from "pages/HomePage"
import LoginPage from "pages/LoginPage"
import RegisterPage from "pages/RegisterPage"
import TestPage from "pages/TestPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="test" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
