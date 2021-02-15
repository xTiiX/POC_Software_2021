import { Cosmonaut, Country, Mission } from './types';

export function createCosmonaut(name: string, country: Country, mission: Mission): Cosmonaut {
  const cosmo: Cosmonaut = { name, country, mission };
  return cosmo;
}

const cosmo1: Cosmonaut = createCosmonaut('Marcel', Country.FR, Mission.EARTH);
console.log(cosmo1.mission);
console.log(cosmo1.name);
console.log(cosmo1.country);
