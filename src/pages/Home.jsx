import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/Productcard";
import CategoryFilter from "../components/CategoryFilter";
import { Container, Grid, Typography } from "@mui/material";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Products
      </Typography>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{ display: "flex" }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
