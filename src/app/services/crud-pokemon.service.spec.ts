import { TestBed } from '@angular/core/testing';

import { CrudPokemonService } from './crud-pokemon.service';

describe('CrudPokemonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudPokemonService = TestBed.get(CrudPokemonService);
    expect(service).toBeTruthy();
  });
});
