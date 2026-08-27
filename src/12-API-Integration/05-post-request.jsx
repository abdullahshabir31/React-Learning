import { useState } from "react";

function PostRequest() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body: "This is a new post.",
        userId: 1,
      }),
    });

    const data = await response.json();

    setMessage(`Post created with ID: ${data.id}`);
    setTitle("");
  };

  return (
    <div>
      <h1>POST Request</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <button type="submit">Create Post</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default PostRequest;
