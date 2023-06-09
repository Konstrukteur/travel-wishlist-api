import pool from "../config/database.js";

const countryExist = async (req, res, next) => {
  const {
    params: { code },
  } = req;

  const sql =
    "SELECT * FROM travelCountries WHERE alpha2code = $1 OR alpha3code = $1 LIMIT 1";

  try {
    const {
      rows: [country],
    } = await pool.query(sql, [code]);
    if (!country) return next("Non existing country");
    return next();
  } catch (err) {
    next(err);
  }
};

export default countryExist;
