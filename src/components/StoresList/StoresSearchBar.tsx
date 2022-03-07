import { Box, TextField } from "@mui/material";

const StoresSearchBar = ({ onChanged }: { onChanged: Function }) => {
  return (
    <Box sx={{ display: "flex", my: 5 }}>
      <TextField
        id="search-store-txt"
        label="Search for  Store"
        variant="outlined"
        placeholder="Start typing to search for a store..."
        onChange={(event) => onChanged(event?.target.value)}
        sx={{ width: "300px" }}
      />
    </Box>
  );
};

export default StoresSearchBar;
