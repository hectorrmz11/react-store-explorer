import { Box, Button, Dialog, DialogTitle } from "@mui/material";
import { Store } from "../../types";

const DeleteModal = ({
  store,
  open,
  onClose,
  onStoreDelete,
}: {
  store: Store;
  open: boolean;
  onClose: Function;
  onStoreDelete: Function;
}) => {
  return (
    <Dialog onClose={() => onClose()} open={open}>
      <DialogTitle>Delete Store {store.vanityName}</DialogTitle>
      <Box sx={{ display: "flex", justifyContent: "end", p: 2 }}>
        <Button variant="outlined" sx={{ mr: 2 }} onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="contained" onClick={() => onStoreDelete(store.id)}>
          Delete
        </Button>
      </Box>
    </Dialog>
  );
};

export default DeleteModal;
