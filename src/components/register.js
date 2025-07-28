// src/components/Register.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import Alert from '@mui/material/Alert';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoginError(false);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      onRegister(userCredential.user);
    } catch (error) {
      setLoginError(true);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0D1B2A",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 350,
          backgroundColor: "#1B263B",
          color: "white",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Registrarse
        </Typography>

        {loginError && (
          <Alert severity="error">
            Error al registrarse
          </Alert>
        )}

        <Box component="form" onSubmit={handleRegister} noValidate>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{
              style: { color: "white" },
            }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Crear cuenta
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Register;