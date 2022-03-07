import { Box, ListItem, Typography } from "@mui/material";

const StoreListItem = ({ title, text }: { title: string; text: string }) => {
  return (
    <ListItem divider>
      <Typography variant="subtitle1" sx={{ minWidth: "180px" }}>
        {title}
      </Typography>
      <Box>
        <Typography variant="body2">{text}</Typography>
      </Box>
    </ListItem>
  );
};

export default StoreListItem;
