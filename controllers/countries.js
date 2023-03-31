import { flagAsVisited, getCountries } from "../models/countryModel.js";

const index = async (req, res) => {
  const {
    query: { sort, visited },
  } = req;

  try {
    const countries = await getCountries(visited, sort);
    res.render("../views/index", {
      countries: countries,
      iterator: countries.length,
    });
  } catch (err) {
    console.error(err);
  }
};

const destroy = async (req, res, next) => {
  const { code } = req.params;

  try {
    const country = await flagAsVisited(code);
    res.render("../views/destroy", { country: country });
  } catch (err) {
    console.error(err);
  }
};

export { index, destroy };
