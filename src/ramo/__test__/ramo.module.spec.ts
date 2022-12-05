import { Test, TestingModule } from '@nestjs/testing';

import { RamoModule } from '../ramo.module';


describe('RamoModule', () => {
  let ramoModule: RamoModule;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [RamoModule],
    }).compile();

    ramoModule = app.get<RamoModule>(RamoModule);
  });

  it('should be defined', () => {
    expect(ramoModule).toBeInstanceOf(RamoModule);
  });
});