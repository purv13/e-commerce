import React from "react";
import { Button, Stack } from "@mui/material";

const CategoryFilter = ({ categories, selectedCategory, onSelect }) => {
  return (
    <Stack direction="row" spacing={2} mb={3} flexWrap="wrap">
      <Button
        variant={selectedCategory === "All" ? "contained" : "outlined"}
        onClick={() => onSelect("All")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "contained" : "outlined"}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </Stack>
  );
};

export default CategoryFilter;
