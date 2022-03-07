import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  List,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../store";
import { deleteStore, storeSelector } from "../store/store";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { DeleteModal, StoreListItem } from "../components";

const StoreDetails = () => {
  const { id } = useParams();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleStoreDeleted = (id: string) => {
    dispatch(deleteStore(id));
    setIsDeleteModalOpen(false);
    navigate(-1);
  };

  const store = useSelector(storeSelector(id!));

  return (
    <>
      {store?.id && (
        <Box sx={{ mt: 3 }}>
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
                <Typography variant="h4">{`${store?.vanityName}`}</Typography>
                <Typography variant="h5">{store?.storeNumber}</Typography>
              </Box>
            </Grid>

            <Box sx={{ m: 1 }}>
              <Link to={`/edit-store/${store?.id}`}>
                <Button
                  startIcon={<ModeEditOutlinedIcon fontSize="small" />}
                  color="primary"
                  variant="outlined"
                  sx={{ mr: 2 }}
                >
                  Edit
                </Button>
              </Link>
              <Button
                startIcon={<DeleteIcon fontSize="small" />}
                color="error"
                variant="outlined"
                sx={{ mr: 2 }}
                onClick={() => setIsDeleteModalOpen(true)}
              >
                Delete
              </Button>
            </Box>
          </Grid>

          <Card
            sx={{
              my: 3,
              "& .MuiDivider-root": {
                borderColor: "#e6e8f0",
              },
            }}
          >
            <CardHeader
              title={
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  Store Information
                </Typography>
              }
            ></CardHeader>
            <Divider
              sx={{
                m: 0,
              }}
            />
            <CardContent sx={{ p: 0 }}>
              <List>
                <StoreListItem title="Banner" text={store?.banner} />
                <StoreListItem
                  title="Store Number"
                  text={`${store?.storeNumber}`}
                />
                <StoreListItem title="City" text={store?.city} />
                <StoreListItem title="Zip Code" text={store?.zipCode} />
                <StoreListItem
                  title="Hours"
                  text={`${store?.openTime} | ${store?.closeTime}`}
                />
                <StoreListItem title="Time zone" text={store?.timezone} />
                <StoreListItem title="District" text={`${store?.district}`} />
                <StoreListItem title="Division" text={`${store?.division}`} />
              </List>
            </CardContent>
          </Card>

          {isDeleteModalOpen && store && (
            <DeleteModal
              store={store}
              open={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onStoreDelete={handleStoreDeleted}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default StoreDetails;
