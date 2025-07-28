// src/App.js
import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./pages/home";

import { Container, Button, Box } from "@mui/material";

function App() {
  const [user, setUser] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0D1B2A",
        padding: 4,
      }}
    >
      <Container>
        {user ? (
          <>
            <Home username={user.email} />
            <Box mt={2}>
              <Button variant="contained" color="secondary" fullWidth onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </Box>
          </>
        ) : isRegistering ? (
          <>
            <Register onRegister={setUser} />
            <Box mt={2}>
              <Button variant="outlined" fullWidth onClick={() => setIsRegistering(false)}>
                ¿Ya tienes cuenta? Inicia sesión
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Login onLogin={setUser} />
            <Box mt={2}>
              <Button variant="outlined" fullWidth onClick={() => setIsRegistering(true)}>
                ¿No tienes cuenta? Regístrate
              </Button>
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;