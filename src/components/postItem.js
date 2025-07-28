// src/components/PostItem.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const PostItem = ({ post, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedBody, setEditedBody] = useState(post.body);

  const handleEdit = () => setIsEditing(true);

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(post.title);
    setEditedBody(post.body);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            id: post.id,
            title: editedTitle,
            body: editedBody,
            userId: post.userId,
          }),
        }
      );

      const updatedPost = await response.json();
      onUpdate(updatedPost);
      setIsEditing(false);
    } catch (error) {
      console.error("Error al editar publicación:", error);
    }
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        backgroundColor: "#091325ff",
        color: "white",
        marginRight: 5,
      }}
    >
      <CardContent>
        {isEditing ? (
          <Stack spacing={2}>
            <TextField
              label="Título"
              variant="outlined"
              fullWidth
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white", borderColor: "white" },
              }}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&:hover fieldset": { borderColor: "white" } } }}
            />
            <TextField
              label="Contenido"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{
                style: { color: "white" },
              }}
              sx={{ "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "white" }, "&:hover fieldset": { borderColor: "white" } } }}
            />
            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  backgroundColor: "#1B263B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2D3A52",
                  },
                }}
              >
                Guardar
              </Button>
              <Button
                variant="contained"
                onClick={handleCancel}
                sx={{
                  backgroundColor: "#1B263B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2D3A52",
                  },
                }}
              >
                Cancelar
              </Button>
            </Stack>
          </Stack>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {post.body}
            </Typography>
            <Stack direction="row" spacing={1} mt={2}>
              <Button
                variant="contained"
                onClick={handleEdit}
                sx={{
                  backgroundColor: "#1B263B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2D3A52",
                  },
                }}
              >
                Editar
              </Button>
              <Button
                variant="contained"
                onClick={() => onDelete(post.id)}
                sx={{
                  backgroundColor: "#1B263B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#2D3A52",
                  },
                }}
              >
                Eliminar
              </Button>
            </Stack>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PostItem;
