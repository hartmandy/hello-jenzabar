import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/**
 * On this page we are doing a GET request.
 */

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((err) => console.error(err));
  }, []);

  const handleNavigateToCreateForm = () => navigate("/post-form");

  return (
    <div className="m-5 p-4 grid gap-2">
      <div className="flex justify-between">
        <h1 className="font-bold text-4xl">Post List</h1>
        <button
          onClick={handleNavigateToCreateForm}
          className="text-xl dark:bg-slate-100 dark:hover:bg-slate-400 dark:text-slate-700 text-slate-100 py-2 px-5 font-bold bg-slate-600 rounded"
        >
          Create
        </button>
      </div>
      {posts.map((post) => (
        <Link
          key={post.id}
          to={`/post/${post.id}`}
          className="hover:underline hover:cursor-pointer text-xl"
        >
          <h1>{post.title}</h1>
        </Link>
      ))}
    </div>
  );
}
