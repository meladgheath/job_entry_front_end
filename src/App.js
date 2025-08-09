import './App.css';
import Main from "./view/Main";
import {Route, Routes, useNavigate} from "react-router-dom";

import A5 from "./view/A5";
import Login from "./view/Login";
import Page404 from "./view/404";
import {useBearStore} from "./controller/useBearStore";


function App() {

    const Navigator = useNavigate()

    const isLogin = useBearStore((state)=> state.isLogin)
    return (
          <Routes>
                <Route path="/" element={ isLogin ? <Main />  : <Login/>}/>
                <Route path="/Login" element={<Login/>} />
                <Route path="/mydoc" element={<A5 /> }/>
              <Route path="/*" element={<Page404 />}/>
        </Routes>
  );
}
export default App;