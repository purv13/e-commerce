import React from "react";
import { Button, Box } from "@mui/material";

export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        overflowX: "auto",        // ✅ horizontal scroll
        pb: 1,
        mt: 2,
        mb: 3,
        "&::-webkit-scrollbar": { display: "none" }, // ✅ hide scrollbar
      }}
    >
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
    </Box>
  );
}
