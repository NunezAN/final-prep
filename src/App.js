import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path=":id" element={<Posts/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
