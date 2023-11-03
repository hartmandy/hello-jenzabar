import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./post-list";
import PostPage from "./post-page";
import PostForm from "./post-form";
import "./App.css";

function App() {
  return (
    <div className="p-6 pb-0 h-full text-slate-700 bg-slate-200 dark:bg-slate-700 dark:text-slate-200">
      <div className="overflow-auto h-full flex-col justify-center">
        <Router>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/post-form/:id" element={<PostForm />} />
            <Route path="/post-form" element={<PostForm />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
