import data from '../db/wishlist.json' assert {type: 'json'};

export async function getCountries(req, res, next) {
    try {
        res.json(data.countries);
    } catch (error) {
        next(error);
    }
};

export async function postCountry(req, res, next) {
    try {
        const newCountry = req.body;
        console.log(newCountry);
        data.countries.push(newCountry)
        res.status(201).send('Country has been added.');
    } catch (error) {
        next(error);
    }
};

export async function countryByCode(req, res, next) {
    const { code } = req.params;
    try {
        const country = data.countries.filter(country => country.alpha2Code === code || country.alpha3Code === code)
        res.json(country);
    } catch (error) {
        next(error);
    }
};

// export async function updateCountry(req, res, next) {
//     const {id} = req.params;
//     const {name} = req.body;
//     try {
//         const country = data.countries.find(country => country.id === id)
//         country.name = name;
//         res.json(country);
//     } catch (error) {
//         next(error);
//     }
// };

// export async function updateCountry(req, res, next) {
//     const { code: id } = req.params;
//     const { name } = req.body;
//     try {
//         const country = data.countries.find(country => country.id === id);
//         if (!country) {
//             return res.status(404).json({ error: 'Country not found' });
//         }
//         country.name = name;
//         res.json(country);
//     } catch (error) {
//         next(error);
//     }
// };

export async function updateCountry(req, res, next) {
    const { code: id } = req.params;
    const { name } = req.body;
    try {
        const country = data.countries.find(country => country.id === parseInt(id));
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        country.name = name;
        res.json(country);
    } catch (error) {
        next(error);
    }
};
