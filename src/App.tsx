import './App.css'
import Guest from './components/Guest';
import {Navigate, Route, Routes} from 'react-router';
import Profile from "./components/Profile";

function App() {
    const token = 'dhfgjj';

    return (
        <Routes>
            <Route path="/" element={token ? <Navigate to={'/profile'} replace /> : <Guest/>}/>
            <Route path="/profile" element={token ? <Profile/> : <Navigate to={'/'} replace/>}/>
        </Routes>
    )
}

export default App
