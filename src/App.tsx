
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Service from './pages/Service';
import Works from './pages/Works';
import ProjectDetail from './components/ProjectDetail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* All pages inside MainLayout will have the Navbar */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/works" element={<Works />} />
              <Route path="/project/:id" element={<ProjectDetail />} />

          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
