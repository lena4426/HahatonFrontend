import {Routes, Route} from 'react-router-dom';
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <div id="app">
      <Routes>
          <Route exact path='/register' element={<Register text={"Регистрация"} />} />
          <Route exact path='/login' element={<Login text={"Вход"} />} />
      </Routes>
    </div>
  );
}

export default App;
