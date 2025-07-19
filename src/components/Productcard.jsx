import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 320,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // ✅ Spread content
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "cover" }} // ✅ Ensure consistent image style
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
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

      <CardActions sx={{ mt: "auto" }}>
        <Button
          size="small"
          variant="contained"
          fullWidth
          component={Link}
          to={`/product/${product.id}`}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
