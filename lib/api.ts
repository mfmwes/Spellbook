import axios from "axios";

export const api = axios.create({
  baseURL: "http://spellbook-ghanor.up.railway.app",
});
