import fetchMock from "fetch-mock";
import { States, Store } from "../../types";

const mockResponse = require("./MOCK_DATA.json");
const statesResponse = require("./STATES_DATA.json");

const baseUrl = "http://kroger.com";

fetchMock.mock(`${baseUrl}/store`, mockResponse, { delay: 1500 });
fetchMock.mock(`${baseUrl}/state`, statesResponse);

export const fetchStoreData = async (): Promise<Store[]> => {
  /* NOTE: please use global fetch API to fetch mock data and return here for use in components
    (This is required due to the way that the endpoint is mocked)
  */
  const response = await fetch(`${baseUrl}/store`);
  const data = await response.json();

  return data;
};

export const fetchStatesData = async (): Promise<States> => {
  const response = await fetch(`${baseUrl}/state`);
  const data = await response.json();

  return data;
};
