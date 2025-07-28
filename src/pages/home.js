// src/pages/Home.js
import { Box, Typography } from "@mui/material";
import PostList from "../components/postList";

const Home = ({ username }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#0D1B2A",
        color: "white",
        padding: "2rem",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Bienvenido, {username}
      </Typography>
      <PostList />
    </Box>
  );
};

export default Home;

