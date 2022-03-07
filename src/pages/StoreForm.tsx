import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import StoreForm from "../components/StoreForm/StoreForm";
import { useAppDispatch } from "../store";
import { saveStore, storeSelector } from "../store/store";
import { Store } from "../types";

const StorePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const store = useSelector(storeSelector(id!));

  const handleStoreSubmitted = (store: Store) => {
    dispatch(saveStore(store));
    navigate(-1);
  };

  return (
    <>
      <Box>
        <Typography variant="h4">
          {store?.id ? "Edit Store" : "Add Store"}
        </Typography>

        <StoreForm store={store} onFormSubmitted={handleStoreSubmitted} />
      </Box>
    </>
  );
};

export default StorePage;
