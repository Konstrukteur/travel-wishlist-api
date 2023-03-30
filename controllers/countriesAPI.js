import pool from "../config/database.js";

import {
  flagAsVisited,
  getCountries,
  getCountryByCode,
  updateCountry,
} from "../models/countryModel.js";

const index = async (req, res) => {
  const {
    query: { sort, visited },
  } = req;

  try {
    const countries = await getCountries(visited, sort);
    res.json(countries);
  } catch (err) {
    console.error(err);
  }
};

const show = async (req, res, next) => {
  const { code } = req.params;

  try {
    const country = getCountryByCode(code);
    res.json(country);
  } catch (error) {
    next("Non existing country");
  }
};

const create = async (req, res) => {
  const { name, alpha2code, alpha3code } = req.body;

  try {
    const newCountry = await createCountry(name, alpha2code, alpha3code);
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const update = async (req, res) => {
  const {
    params: { code },
  } = req;
  const { name, alpha2code, alpha3code, visited } = req.body;

  try {
    const country = await updateCountry(name, alpha2code, alpha3code, visited);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const destroy = async (req, res, next) => {
  const { code } = req.params;

  try {
    const country = await flagAsVisited(code);
    res.json(country);
  } catch (error) {
    next("Non existing country");
  }
};

export { index, show, create, update, destroy };
