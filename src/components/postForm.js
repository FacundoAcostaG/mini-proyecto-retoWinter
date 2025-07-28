// src/components/PostForm.js
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import Alert from '@mui/material/Alert';

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [emptyError, setEmptyError] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmptyError(false);
    setSuccessMsg(false);

    if (!title.trim() || !body.trim()) {
      setEmptyError(true);
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ title, body }),
      });

      const newPost = await response.json();
      newPost.id = Date.now();
      onAddPost(newPost);
      setTitle("");
      setBody("");
      setSuccessMsg(true);
    } catch (error) {
      console.error("Error al crear publicación:", error);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#091325ff",
        padding: 2,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
        Crear nueva publicación
      </Typography>
      {emptyError ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          Debe completar ambos campos
        </Alert>
      ) : successMsg ? (
        <Alert severity="success" sx={{ mb: 2 }}>
          Publicación creada con éxito
        </Alert>
      ) : null}

      <TextField
        fullWidth
        variant="outlined"
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{
          marginBottom: 2,
          input: { color: "white" },
          label: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />

      <TextField
        fullWidth
        variant="outlined"
        label="Contenido"
        value={body}
        multiline
        rows={4}
        onChange={(e) => setBody(e.target.value)}
        sx={{
          marginBottom: 2,
          textarea: { color: "white" },
          label: { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "white" },
            "&:hover fieldset": { borderColor: "white" },
          },
        }}
        InputLabelProps={{ style: { color: "white" } }}
      />

      <Box textAlign="right">
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#1B263B",
            color: "white",
            "&:hover": {
              backgroundColor: "#2D3A52",
            },
          }}
        >
          Publicar
        </Button>
      </Box>
    </Paper>
  );
};

export default PostForm;