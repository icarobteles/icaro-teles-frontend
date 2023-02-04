import axios from "axios";

export const swapiInstance = axios.create({
  baseURL: "https://swapi.dev/api"
});

export const starWarsImagesInstance = axios.create({
  baseURL: "https://easy-blue-barracuda-gown.cyclic.app"
});
