import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/pages/Login";
import "./App.css";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
