import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";


const ProductDetails = () => {
    const { id } = useParams(); // get dynamic ID from URL
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 600, margin: "auto" }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            ₹{product.price}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </CardContent>
        
        <Button fullWidth variant="contained" sx={{ borderRadius: 0 }}>
          Buy Now
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ borderRadius: 0 }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </Card>
    </Container>
  );
};

export default ProductDetails;
