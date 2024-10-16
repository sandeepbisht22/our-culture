// Home.tsx
import React from "react";
import {
  Typography,
  IconButton,
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const Home: React.FC = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        sx={(theme) => ({
          mt: 4,
          color: theme.palette.primary.main,
        })}
      >
        <Card
          sx={{ position: "relative", borderRadius: 4, overflow: "hidden" }}
        >
          <CardMedia
            component="img"
            height="400"
            image="/placeholder.svg?height=400&width=800"
            alt="Treebo Tryst"
          />
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <Typography variant="subtitle1" gutterBottom>
              Blue Mountain Country Club and Resort
            </Typography>
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Treebo Tryst
            </Typography>
            <Typography variant="h6" gutterBottom>
              -02°C Very Cold
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ bgcolor: "rgba(255,255,255,0.3)", mr: 1 }}>
                <ArrowBack />
              </IconButton>
              <IconButton sx={{ bgcolor: "rgba(255,255,255,0.3)" }}>
                <ArrowForward />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Home;
