import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          ₹{product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description.length > 100
            ? product.description.slice(0, 100) + "..."
            : product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" fullWidth component={Link} to={`/product/${product.id}`}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
