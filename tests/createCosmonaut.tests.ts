// createCosmonaut.tests.ts
import { describe, expect, it } from '@jest/globals';
import { createCosmonaut } from '../src/createCosmonaut';
import { Cosmonaut, Country, Mission } from '../src/types';

describe('Test of createCosmonaut', () => {
  it('create a cosmonaut', () => {
    const name: string = 'Marcel';
    const mission: Mission = Mission.ISS;
    const country: Country = Country.FR;
    const cosmo: Cosmonaut = { name, mission, country };
    const test: Cosmonaut = createCosmonaut(name, mission, country);
    expect(test).toBe(cosmo);
  });
});
