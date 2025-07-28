// src/components/PostList.js
import React, { useEffect, useState } from "react";
import PostForm from "./postForm";
import PostItem from "./postItem";
import { Box, Typography } from "@mui/material";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener publicaciones:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handleUpdatePost = (updatedPost) => {
    const updatedList = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedList);
  };

const handleDeletePost = async (postId) => {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'DELETE',
    });

    // Actualizamos el estado local
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  } catch (error) {
    console.error("Error al eliminar la publicación:", error);
  }
};

  if (loading) return <p>Cargando publicaciones...</p>;

  return (
    <Box
      sx={{
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: "2rem",
      }}
    >
      <PostForm onAddPost={handleAddPost} />
      <Typography variant="h4" gutterBottom>
        Publicaciones:
      </Typography>
      <ul>
        {posts.map((post) => (
            <PostItem key={post.id} post={post} onUpdate={handleUpdatePost} onDelete={handleDeletePost} />
        ))}
      </ul>
    </Box>
  );
};

export default PostList;