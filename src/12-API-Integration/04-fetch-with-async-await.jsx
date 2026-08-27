import { useEffect, useState } from "react";

function FetchWithAsyncAwait() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      const data = await response.json();

      setPosts(data.slice(0, 5));
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default FetchWithAsyncAwait;
