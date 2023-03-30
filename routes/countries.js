import { Router } from "express";
import {
  index as getCountries,
  destroy as destroyCountry,
} from "../controllers/countries.js";
import countryExist from "../middlewares/countryExist.js";

const countryRoutes = Router();

countryRoutes.route("/").get(getCountries);

countryRoutes.route("/:code").delete(countryExist, destroyCountry);

export default countryRoutes;
