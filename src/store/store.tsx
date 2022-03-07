import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { States, Store } from "../types";
import { fetchStatesData, fetchStoreData } from "../utils/api/api";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "./";

export interface StoresObj {
  [key: string]: Store;
}
export interface StoreState {
  isLoading: boolean;
  storesData: Store[];
  stores: Store[];
  storesObj: StoresObj;
  banners: string[];
  states: States;
  timezones: string[];
}

const initialState: StoreState = {
  isLoading: false,
  storesData: [],
  stores: [],
  storesObj: {},
  banners: [],
  states: {},
  timezones: [],
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStoresData: (state, action: PayloadAction<Store[]>) => {
      state.storesData = action.payload;
      state.stores = action.payload;

      const banners: { [key: string]: boolean } = {};
      const timezones: { [key: string]: boolean } = {};

      state.storesData.forEach((store) => {
        state.storesObj[store.id] = store;
        banners[store.banner] = true;
        timezones[store.timezone] = true;
      });

      state.banners = Object.keys(banners);
      state.timezones = Object.keys(timezones);
    },
    filterStores: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        state.stores = state.storesData;
      } else {
        state.stores = state.storesData.filter((store) =>
          store.vanityName
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        );
      }
    },
    saveStore: (state, action: PayloadAction<Store>) => {
      let store = action.payload;

      if (!store.id) {
        const id = uuidv4();
        store = { ...store, id };
      }

      state.storesObj[store.id] = store;
      state.storesData = [];

      Object.keys(state.storesObj).forEach((id) => {
        state.storesData.push(state.storesObj[id]);
      });

      state.stores = state.storesData;
    },

    deleteStore: (state, action: PayloadAction<string>) => {
      state.storesData = state.storesData.filter(
        (store) => store.id !== action.payload
      );
      state.stores = state.storesData;
      delete state.storesObj[action.payload];
    },
    setStates: (state, action: PayloadAction<States>) => {
      state.states = action.payload;
    },

    setInitData: (state, action: PayloadAction<Store[]>) => {
      state.storesData = action.payload;
      state.stores = state.storesData;

      const banners: { [key: string]: boolean } = {};
      const timezones: { [key: string]: boolean } = {};

      state.storesData.forEach((store) => {
        state.storesObj[store.id] = store;
        banners[store.banner] = true;
        timezones[store.timezone] = true;
      });

      state.banners = Object.keys(banners);
      state.timezones = Object.keys(timezones);
    },
    setLoadingState: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setLoadingState,
  setStoresData,
  filterStores,
  deleteStore,
  setStates,
  saveStore,
  setInitData,
} = storeSlice.actions;

export const loadStores = () => {
  return async (dispatch: any) => {
    dispatch(setLoadingState(true));
    const store = await fetchStoreData();
    dispatch(setLoadingState(false));

    dispatch(setInitData(store));
  };
};

export const loadStates = () => {
  return async (dispatch: any) => {
    const states = await fetchStatesData();

    dispatch(setStates(states));
  };
};

/* Custom  Selectors */

export const storeSelector = (id: string) => {
  return createSelector(
    (state: RootState) => state.store.storesObj,
    (stores: StoresObj) => stores[`${id}`]
  );
};

export const bannersSelector = (state: RootState) => state.store.banners;
export const statesSelector = (state: RootState) => state.store.states;
export const timezonesSelector = (state: RootState) => state.store.timezones;

export default storeSlice.reducer;
