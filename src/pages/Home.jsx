import React from "react";
import products from "../data/products";
import ProductCard from "../components/Productcard";
import { Container, Grid } from "@mui/material";
import { Typography } from "@mui/material";


const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{ display: "flex" }} // 👈 KEY FIX!
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
