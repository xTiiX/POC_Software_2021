import { Cosmonaut, Country, Mission } from './types';

export async function selectCosmonaut(mission: Mission, country: Country): Array {
  const axios = require('axios').default;
  try {
    const response = await axios.get('');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
