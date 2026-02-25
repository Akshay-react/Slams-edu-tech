
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* All pages inside MainLayout will have the Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
