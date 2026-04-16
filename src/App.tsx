import './App.css'
import Guest from './components/Guest';
import {Route, Routes} from 'react-router';
import Profile from "./components/Profile/Index";

function App() {

  return (
      <Routes>
          <Route path="/" element={<Guest/>} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>
  )
}

export default App
