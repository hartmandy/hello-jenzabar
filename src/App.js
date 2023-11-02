import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import Get from "./get-request";
import Post from "./post-request";
import Put from "./put-request";
import Delete from "./delete-request";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get" element={<Get />} />
            <Route path="/post" element={<Post />} />
            <Route path="/put" element={<Put />} />
            <Route path="/delete" element={<Delete />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
