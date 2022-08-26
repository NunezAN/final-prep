import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchposts() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      setPosts(data);
    }
    fetchposts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>
          {post.title}
          <br />
        </p>
      ))}
    </div>
  );
};

export default Posts;
