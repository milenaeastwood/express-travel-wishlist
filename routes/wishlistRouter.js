import { Router } from 'express';
import { getCountries, postCountry, countryByCode, updateCountry } from '../controllers/controller.js';

export const wishlistRouter = Router();

wishlistRouter.route('/api/countries')
    .get(getCountries)
    .post(postCountry)

wishlistRouter.route('/api/countries/:code')
    .get(countryByCode)
    .put(updateCountry)