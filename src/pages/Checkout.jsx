// src/pages/Checkout.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    clearCart();
    alert("✅ Order placed successfully!");
    navigate("/"); // or navigate("/order-confirmed") if you create a new route
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Checkout
      </Typography>

      <Grid container spacing={2}>
        {cartItems.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{ height: 200, objectFit: "contain", p: 2 }}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>₹{item.price}</Typography>
                <Typography>Quantity: {item.quantity}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5">Total: ₹{getTotalPrice()}</Typography>

      <Button
        variant="contained"
        color="success"
        sx={{ mt: 3 }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </Container>
  );
};

export default Checkout;
