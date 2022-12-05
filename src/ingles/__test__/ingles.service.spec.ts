import { ConfigService } from '@nestjs/config';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { UpdateIngleDto } from '../dto/update-ingle.dto';
import { Ingle } from '../entities/ingle.entity';
import { InglesService } from '../ingles.service';

import {
  DATAMOCK
} from './ingles.mock';


describe('InglesService', () => {
  let service: InglesService;
  let IngleModel: Model<Ingle>;


  const mockModel ={
      findByIdAndDelete: jest.fn().mockResolvedValue(true),

      findOneAndUpdate: jest.fn().mockResolvedValue(DATAMOCK.OneResponse),
      findAll: jest.fn().mockResolvedValue(DATAMOCK.findAll),
      findById: jest.fn().mockImplementation((id: string) =>
        Promise.resolve({
          ...DATAMOCK.One,
          id,
        }),
      ),
      create: jest
      .fn()
      .mockImplementation(() =>
      Promise.resolve({ id: 'a uuid', ...DATAMOCK.OneResponse }),
      ),
      update: jest
      .fn()
      .mockImplementation((id: 'a uuid', updateDto: UpdateIngleDto) =>
        Promise.resolve({ id, ...updateDto }),
      ),
      remove: jest.fn().mockResolvedValue(true),
      paginate: jest.fn().mockResolvedValue(DATAMOCK.findAll),
      
    };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      providers: [
        InglesService,
        
        {
          provide: getModelToken(Ingle.name),
          useValue: mockModel
        },

        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockResolvedValue({ defaultLimit: 10 }),
          }
        },


        


      ],
    }).compile();

    service = module.get<InglesService>(InglesService);

    

    IngleModel = module.get<Model<Ingle>>(getModelToken(Ingle.name));


  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('insertOne', () => {
    it('should successfully insert a cat', () => {

      
      expect(
        service.create(DATAMOCK.One),
      ).resolves.toEqual(DATAMOCK.OneResponse);
      expect(IngleModel.create).toBeCalledTimes(1);
      expect(IngleModel.create).toBeCalledWith({
        ...DATAMOCK.One,
        createdAt: expect.any(Date),
      });
      expect(IngleModel.create).toBeCalledTimes(1);
    });
  });

  describe('updateOne', () => {
    it('should call the update method', async () => {

      const updateDto: UpdateIngleDto = DATAMOCK.One;
      const solicitudId = "a uuid";

      const data = await service.update(solicitudId, updateDto);
      expect(data).toEqual(DATAMOCK.OneResponse);
      expect(IngleModel.findOneAndUpdate).toBeCalledTimes(1);
      expect(IngleModel.findOneAndUpdate).toBeCalledWith(
        { _id: 'a uuid' },
        { ...DATAMOCK.One, updatedAt: expect.any(Date)},
        {"new": true}
      );
    });
  });

  describe('getAll', () => {

    const page = 1;
    const items_per_page = 10;
    it('should return an array of cats', async () => {
      const data = await service.findAll({page,items_per_page});

      expect(data).toStrictEqual(DATAMOCK.paginateResult);
    });
  });

  describe('getOne', () => {
    it('should get a single cat', () => {
      const repoSpy = jest.spyOn(service, 'findOne');
      expect(service.findOne('a uuid')).resolves.toEqual(DATAMOCK.OneResponse);

      expect(repoSpy).toBeCalledWith('a uuid');
    });
  });

  describe('deleteOne', () => {
    it('should return {deleted: true}', () => {
       expect(service.remove('a uuid')).resolves.toEqual({ deleted: true });
    });
    it('should return {deleted: false, message: err.message}', async () => {
      const repoSpy = jest
        .spyOn(IngleModel, 'findByIdAndDelete')
        .mockRejectedValueOnce(new Error('Bad Delete Method 3.'));

      // expect(service.removeOne('a uuid')).resolves.toEqual({ deleted: true });
      // console.log(service.removeOne('a bad uuid'));
      await expect(service.remove('a bad uuid')).resolves.toEqual({
        deleted: false,
        message: 'Bad Delete Method.',
      });
      expect(repoSpy).toBeCalledWith('a bad uuid');
      expect(repoSpy).toBeCalledTimes(2);
    });
  });

});
