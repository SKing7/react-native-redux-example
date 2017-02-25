// @flow

import config from '../lib/config';

export const fetchWeather = () => (
  fetch(config.API_URL)
    .then((res) => res.json())
    .catch((err) => err)
);
