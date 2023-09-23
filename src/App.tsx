import Navbar from "./components/shared/Navbar"
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from "./components/about";
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route path=":id" element={<About />} />
          <Route path="me" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
