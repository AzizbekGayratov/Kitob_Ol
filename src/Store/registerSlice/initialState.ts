import { Storage } from "Services";

export type registerType = {
  token: string | null | undefined | unknown;
};

const initialState: registerType = {
  token: Storage.get("token") || "",
};

export { initialState };
