import Navbar from "./components/shared/Navbar"
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
