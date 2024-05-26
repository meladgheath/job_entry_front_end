import './App.css';
import Main from "./view/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import A5 from "./view/A5";
import Login from "./view/Login";
import Page404 from "./view/404";

function App() {

  return (
      <BrowserRouter>
          <Routes>
          <Route path="/Login" element={<Login />}/>
          <Route path="/" element={<Main />}/>
          <Route path="/mydoc" element={<A5 />}/>
          <Route path="/*" element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
