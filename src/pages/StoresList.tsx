import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStore, filterStores } from "../store/store";
import { Store } from "../types";
import { Box, Button, Grid, Typography } from "@mui/material";
import { DeleteModal, StoresSearchBar, StoresTable } from "../components";
import { useAppDispatch, useAppSelector } from "../store";

const Stores = () => {
  const [store, setStore] = useState<Store | null>(null);
  const [searchTxt, setSearchTxt] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const stores = useAppSelector((state) => state.store.stores);

  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const handleSearchInput = (value: string) => {
    setSearchTxt(value);
  };

  const handleDeleteStoreClicked = (store: Store) => {
    setStore(store);
    setIsDeleteModalOpen(true);
  };

  const handleEditStoreClicked = (id: string) => {
    navigate(`/edit-store/${id}`);
  };

  const handleViewMoreClicked = (id: string) => {
    navigate(`/store/${id}`);
  };

  const handleStoreDeleted = (id: string) => {
    dispatch(deleteStore(id));
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      dispatch(filterStores(searchTxt));
    }, 500);

    // clearing time out execution if new is triggered (debounce effect)
    return () => clearTimeout(timeOut);
  }, [searchTxt, dispatch]);

  return (
    <Box>
      <Typography variant="h4">Stores List</Typography>

      <Grid
        container
        sx={{
          mb: 4,
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Grid
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ mx: 2, textAlign: "left" }}>
            <StoresSearchBar onChanged={handleSearchInput} />
          </Box>
        </Grid>

        <Box sx={{ m: 1 }}>
          <Link to="/add-store">
            <Button color="primary" variant="outlined" sx={{ mr: 2 }}>
              Add Store
            </Button>
          </Link>
        </Box>
      </Grid>

      {stores.length > 0 && (
        <StoresTable
          stores={stores}
          onStoreClicked={handleViewMoreClicked}
          onDeleteStoreClicked={handleDeleteStoreClicked}
          onEditStoreClicked={handleEditStoreClicked}
          onViewMoreClicked={handleViewMoreClicked}
        />
      )}

      {isDeleteModalOpen && store && (
        <DeleteModal
          store={store}
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onStoreDelete={handleStoreDeleted}
        />
      )}
    </Box>
  );
};

export default Stores;
