import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

/**
 * On this page we are sometimes performing a GET, and depending on if we receive an id,
 * a POST(create) or a PUT(update) request.
 *
 * Important to note that Jsonplaceholder doesn't actually create or update a record.
 * Check the network tab to see a successful POST/PUT.
 */

export default function PostForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", body: "" });
  useEffect(() => {
    // If there is an id we are updating, if there isn't we are creating.
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((post) => setForm(post))
        .catch((err) => console.error(err));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const save = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: form,
    })
      .then((res) => navigate("/"))
      .catch((err) => console.error(err));
  };

  const update = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: form,
    })
      .then((res) => navigate("/"))
      .catch((err) => console.error(err));
  };

  const handleSaveOrUpdate = () => {
    if (id) {
      update();
    } else {
      save();
    }
  };

  const formText = id ? "Create Post" : "Update Post";
  const buttonText = id ? "Update" : "Save";
  const isButtonDisabled = !form.title || !form.body;

  return (
    <div className="h-full grid items-center">
      <div>
        <div className="grid gap-4 max-w-2xl mx-auto bg-slate-100 dark:bg-slate-600 p-6 pb-8 rounded shadow">
          <h1 className="text-3xl">{formText}</h1>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border p-2 rounded bg-white dark:bg-slate-600"
            name="title"
            type="text"
            onChange={handleChange}
            value={form.title}
          />
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            rows={5}
            className="border p-2 rounded bg-white  dark:bg-slate-600"
            name="body"
            type="text"
            onChange={handleChange}
            value={form.body}
          />
          <button
            disabled={isButtonDisabled}
            onClick={handleSaveOrUpdate}
            className="text-xl dark:bg-slate-100 dark:hover:bg-slate-400 dark:text-slate-700 text-slate-100 py-2 px-5 font-bold bg-slate-600 rounded mt-5 disabled:bg-slate-500 hover:disabled:bg-slate-500"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
