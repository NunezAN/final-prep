import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchposts() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setTitle(data.title);
      console.log(data);
    }
    fetchposts();
  }, []);

  return <div>{title}</div>;
};

export default Posts;
