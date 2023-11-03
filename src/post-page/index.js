import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

/**
 * On this page we are doing a GET, and a DELETE request. Important to note that Jsonplaceholder
 * doesn't actually delete the record. Check the network tab to see a successful DELETE.
 *
 * Notice that when you load this page you see the state when the page is blank, it shows "no post".
 * This doesn't happen in Remix, we get the data, render the page and serve it to the user.
 */

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((post) => setPost(post))
      .catch((err) => console.error(err));
  }, [id]);

  const deletePost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => navigate(".."))
      .catch((err) => console.error(err));
  };

  const navigateToUpdatePage = () => navigate(`/post-form/${id}`);

  if (!post) {
    return (
      <div className="h-full flex flex-col justify-center item-center">
        <p className="text-lg mx-auto">No Post</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl h-full flex flex-col justify-center item-center mx-auto">
      <div className="flex justify-between gap-10 items-center mb-4">
        <h1 className="text-xl font-semibold">{post.title}</h1>
        <div className="flex gap-2">
          <button
            onClick={navigateToUpdatePage}
            className="text-xl dark:text-slate-200 dark:border-slate-400 hover:dark:text-slate-900 dark:hover:bg-slate-400 hover:bg-slate-900 text-slate-700 hover:text-slate-100 py-2 px-5 font-bold border-slate-600 border-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={deletePost}
            className="text-xl dark:bg-slate-100 dark:hover:bg-slate-400 dark:text-slate-700 text-slate-100 py-2 px-5 font-bold bg-slate-600 rounded"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-md">{post.body}</p>
    </div>
  );
}
