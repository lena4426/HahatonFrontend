import {Routes, Route} from 'react-router-dom';
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import "./App.css";

function App() {
    return (
        <div id="app">
            <Routes>
                <Route exact path='/register' element={<Register text={"Регистрация"}/>}/>
                <Route exact path='/login' element={<Login text={"Вход"}/>}/>
                <Route exact path='/profile' element={<Profile />}/>
            </Routes>
        </div>
    );
}

export default App;
