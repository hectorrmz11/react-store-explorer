import { useCallback, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";

import "./App.css";

import StoresList from "./pages/StoresList";
import StoreDetails from "./pages/StoreDetails";
import { Card, Box, CircularProgress } from "@mui/material";
import StoreForm from "./pages/StoreForm";
import { loadStates, loadStores } from "./store/store";
import { useAppDispatch, useAppSelector } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.store.isLoading);

  const getStores = useCallback(async () => {
    dispatch(loadStores());
    dispatch(loadStates());
  }, [dispatch]);

  useEffect(() => {
    getStores();
  }, [getStores]);

  return (
    <div className="App">
      <Header />
      <Card sx={{ m: 5, p: 5, minHeight: "600px" }}>
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <Box>
            <Routes>
              <Route path="/" element={<StoresList />} />
              <Route path="/add-store" element={<StoreForm />} />
              <Route path="/edit-store/:id" element={<StoreForm />} />
              <Route path="/store/:id" element={<StoreDetails />} />
            </Routes>
          </Box>
        )}
      </Card>
    </div>
  );
}

export default App;
