
import './App.css';
import Main from "./view/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import A5 from "./view/A5";



function App() {
  return (
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Main />}/>
            <Route path="/mydoc" element={<A5 />}/>
          {/*<Route path="/comics" element={<Comics/>} />*/}
          {/*<Route path="/list" element={<ComicsList/>}/>*/}
          {/*<Route path="/list/comics/:id" element={<ComicsStory />} />*/}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
