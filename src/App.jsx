import "./app.scss"
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/watch" element={<Watch/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </>;
};

export default App;
