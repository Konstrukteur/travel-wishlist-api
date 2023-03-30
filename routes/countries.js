import { Router } from "express";
import {
  index as getCountries,
  destroy as deleteCountry,
} from "../controllers/countries.js";
import countryExist from "../middlewares/countryExist.js";

const countryRoutes = Router();

countryRoutes.route("/").get(getCountries);

countryRoutes.route("/:code").delete(countryExist, deleteCountry);

export default countryRoutes;
