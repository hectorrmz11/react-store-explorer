export interface Store {
  id: string;
  banner: string;
  city: string;
  closeTime: string;
  district: number;
  division: number;
  openTime: string;
  state: string;
  storeNumber: number;
  timezone: string;
  vanityName: string;
  zipCode: string;
}

export interface StoreResponse {
  status: number;
  response: Store[];
}

export interface States {
  [code: string]: string;
}
