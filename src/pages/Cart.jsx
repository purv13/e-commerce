import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Box,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" align="center">
          Your cart is empty
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  height: 200,
                  objectFit: "cover",
                  backgroundColor: "#f5f5f5",
                }}
              />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ₹{item.price} x {item.quantity} = ₹
                  {item.price * item.quantity}
                </Typography>

                <Box display="flex" alignItems="center" gap={1} my={1}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <Typography>{item.quantity}</Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </Button>
                </Box>

                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" sx={{ mt: 4 }}>
        Total: ₹{getTotalPrice().toFixed(2)}
      </Typography>

      <Button variant="contained" color="success" sx={{ mt: 2 }} component={Link} to="/checkout">
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;
