import pool from "../config/database.js";

const countryDoesntExist = (req, res, next) => {
  const {
    params: { code },
  } = req;

  const query =
    "SELECT * FROM travelCountries WHERE alpha2code = $1 OR alpha3code = $1 LIMIT 1";

  pool
    .query(query, [code])
    .then(({ rows: [country] }) => {
      if (country) return next("country exist");

      return next();
    })
    .catch((e) => next(e));
};

export default countryDoesntExist;
