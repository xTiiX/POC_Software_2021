// createCosmonaut.tests.ts
import { describe, expect, it } from '@jest/globals';
import { createCosmonaut, getCosmonaut } from '../src/createCosmonaut';
import { Cosmonaut, Country, Mission } from '../src/types';

describe('Test of createCosmonaut', () => {
  it('create a cosmonaut', () => {
    const name: string = 'Marcel';
    const mission: Mission = Mission.ISS;
    const country: Country = Country.FR;
    const cosmo: Cosmonaut = { name, mission, country };
    const test: Cosmonaut = createCosmonaut(name, country, mission);
    expect(test.name).toBe(cosmo.name);
    expect(test.mission).toBe(cosmo.mission);
    expect(test.country).toBe(cosmo.country);
  });

  it('test get a cosmo', () => {
    const cosmo: Cosmonaut = getCosmonaut('../src/cosmonaut.json');
    expect(cosmo.name).toBe('Marcel');
    expect(cosmo.country).toBe(Country.FR);
    expect(cosmo.mission).toBe(Mission.ISS);
  });
});
