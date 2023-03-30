import { Router } from "express";
import {
  index as getCountries,
  show as getCountry,
  create as createCountry,
  update as updateCountry,
  destroy as destroyCountry,
} from "../controllers/countriesAPI.js";

import validateCountryData from "../middlewares/validateCountryData.js";
import countryExist from "../middlewares/countryExist.js";
import countryDoesntExist from "../middlewares/countryDoesntExist.js";

const countriesAPIRouter = Router();

countriesAPIRouter.route("/").get(getCountries);

countriesAPIRouter
  .route("/")
  .post(countryDoesntExist, validateCountryData, createCountry);

countriesAPIRouter.route("/:code").get(getCountry);

countriesAPIRouter
  .route("/:code")
  .put(validateCountryData, countryExist, updateCountry);

countriesAPIRouter.route("/:code").delete(countryExist, destroyCountry);

export default countriesAPIRouter;
