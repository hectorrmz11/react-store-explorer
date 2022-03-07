import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bannersSelector,
  statesSelector,
  timezonesSelector,
} from "../../store/store";
import { Store } from "../../types";

const StoreForm = ({
  onFormSubmitted,
  store,
}: {
  onFormSubmitted: Function;
  store: Store;
}) => {
  const navigate = useNavigate();

  // get store form catalogs
  const banners = useSelector(bannersSelector);
  const states = useSelector(statesSelector);
  const timezones = useSelector(timezonesSelector);

  const [storeForm, setStoreForm] = useState<Store>({} as Store);

  useEffect(() => {
    setStoreForm(store || {});
  }, [store]);

  const handleInputChange = (
    event:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => {
    const name = event.target.name;
    const value = event.target.value;

    setStoreForm((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const validForm = (): boolean => {
    if (
      !storeForm.vanityName ||
      !storeForm.storeNumber ||
      !storeForm.banner ||
      !storeForm.city ||
      !storeForm.state ||
      !storeForm.zipCode ||
      !storeForm.openTime ||
      !storeForm.closeTime ||
      !storeForm.timezone ||
      !storeForm.district ||
      !storeForm.division
    ) {
      return false;
    }

    return true;
  };

  const submitStoreForm = (event: FormEvent) => {
    event.preventDefault();
    onFormSubmitted(storeForm);
  };

  return (
    <form onSubmit={submitStoreForm}>
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "1245px",
          "& .MuiFormControl-root": {
            width: "100%",
            textAlign: "left",
          },
        }}
      >
        <Box
          sx={{
            display: "block",
            width: "100%",
            textAlign: "left",
            mx: 4,
            mt: 2,
          }}
        >
          <Typography variant="h6">Store Information</Typography>
        </Box>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Name"
            name="vanityName"
            variant="outlined"
            value={storeForm.vanityName || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Store Number"
            variant="outlined"
            name="storeNumber"
            value={storeForm.storeNumber || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="banner-label">Banner</InputLabel>
            <Select
              labelId="banner-label"
              label="banner"
              variant="outlined"
              value={storeForm.banner || ""}
              name="banner"
              onChange={handleInputChange}
              required
            >
              {banners.map((banner) => (
                <MenuItem key={banner} value={banner}>
                  {banner}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Divider />

        <Box
          sx={{
            display: "block",
            width: "100%",
            textAlign: "left",
            mx: 4,
            mt: 2,
          }}
        >
          <Typography variant="h6">Store Location</Typography>
        </Box>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="City"
            variant="outlined"
            name="city"
            value={storeForm.city || ""}
            onChange={handleInputChange}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              label="state"
              variant="outlined"
              name="state"
              value={storeForm.state || ""}
              onChange={handleInputChange}
            >
              {Object.keys(states).map((state) => (
                <MenuItem key={state} value={state}>
                  {states[state]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Zip Code"
            variant="outlined"
            name="zipCode"
            value={storeForm.zipCode || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="District"
            variant="outlined"
            name="district"
            value={storeForm.district || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Division"
            variant="outlined"
            name="division"
            value={storeForm.division || ""}
            onChange={handleInputChange}
          />
        </Grid>

        <Box
          sx={{
            display: "block",
            width: "100%",
            textAlign: "left",
            mx: 4,
            mt: 2,
          }}
        >
          <Typography variant="h6">Store Hours</Typography>
        </Box>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Open at"
            variant="outlined"
            name="openTime"
            value={storeForm.openTime || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <TextField
            label="Close at"
            variant="outlined"
            name="closeTime"
            value={storeForm.closeTime || ""}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12} lg={4}>
          <FormControl fullWidth>
            <InputLabel id="timezone-label">Timezone</InputLabel>
            <Select
              labelId="timezone-label"
              label="timezone"
              variant="outlined"
              name="timezone"
              value={storeForm.timezone || ""}
              onChange={handleInputChange}
            >
              {timezones.map((timezone) => (
                <MenuItem key={timezone} value={timezone}>
                  {timezone}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
          mt: 4,
        }}
      >
        <Button
          color="primary"
          variant="outlined"
          sx={{
            mr: 3,
          }}
          onClick={() => navigate(-1)}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={!validForm()}
        >
          Save
        </Button>
      </Box>
    </form>
  );
};

export default StoreForm;
