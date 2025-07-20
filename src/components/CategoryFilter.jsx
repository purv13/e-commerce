import React from "react";
import { Button, Box } from "@mui/material";

export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        overflowX: "auto",
        scrollSnapType: "x mandatory",         // 👈 Smooth horizontal scroll snap
        "& > *": {
          scrollSnapAlign: "start",            // 👈 Each button snaps into view
        },
        "&::-webkit-scrollbar": { display: "none" }, // 👈 Hide scroll bar
        pb: 1,
        mt: 2,
        mb: 3,
      }}
    >
      {/* All Button */}
      <Button
        sx={{
          whiteSpace: "nowrap",
          minWidth: "fit-content",
          px: 2,
          fontSize: "0.85rem",
        }}
        variant={selectedCategory === "All" ? "contained" : "outlined"}
        onClick={() => onSelect("All")}
      >
        All
      </Button>

      {/* Dynamic Category Buttons */}
      {categories.map((category) => (
        <Button
          key={category}
          sx={{
            whiteSpace: "nowrap",
            minWidth: "fit-content",
            px: 2,
            fontSize: "0.85rem",
          }}
          variant={selectedCategory === category ? "contained" : "outlined"}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
}
