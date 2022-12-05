import { Test, TestingModule } from '@nestjs/testing';

import { DiaController } from '../dia.controller';
import { DiaService } from '../dia.service';
import { CreateDiaDto } from '../dto/create-dia.dto';
import { UpdateDiaDto } from '../dto/update-dia.dto';





import {
  DATAMOCK
} from './dia.mock';


describe('CursoAprenderController', () => {
  let controller: DiaController;
  let service: DiaService;

  const mockService = {
      findAll: jest.fn().mockResolvedValue(DATAMOCK.findAll),
      findOne: jest.fn().mockImplementation((id: string) =>
        Promise.resolve({
          ...DATAMOCK.One,
          id,
        }),
      ),
      getOneByName: jest
        .fn()
        .mockImplementation((name: string) =>
          Promise.resolve(DATAMOCK.One),
        ),
      create: jest
        .fn()
        .mockImplementation((createDto: CreateDiaDto) =>
          Promise.resolve({ id: '1', ...createDto }),
        ),
      update: jest
        .fn()
        .mockImplementation((id: 'a uuid', updateDto: UpdateDiaDto) =>
          Promise.resolve({ id, ...updateDto }),
        ),
      remove: jest.fn().mockResolvedValue({ deleted: true }),
    };


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      controllers: [DiaController],
      providers: [
        {
          provide: DiaService,
          useValue: mockService,
        },
      ],
    })

    .compile();

    controller = module.get<DiaController>(DiaController);
    service = module.get<DiaService>(DiaService);
  }); 

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find-all/:query', () => {

    it('should get an array of Asignaturas Curriculares', async () => {
      await expect(controller.findAll(DATAMOCK.Paginate,"")).resolves.toEqual(DATAMOCK.findAll);


      // confirmo las veces en las que se llamó la función
      // I 'm confirm the oportunitis in the call the function
      // confirm the times the function was called
      expect (service.findAll).toHaveBeenCalledTimes(1);

      // Confirmo si al realizar la llamada retorna el valor de la variable result
      // I'm confirm if the call return the value of variable result
      // Confirm if the call returns the value of the result variable
      expect(await controller.findAll(DATAMOCK.Paginate,"")).toStrictEqual(DATAMOCK.findAll);

      // confirmo la cantidad de información que me retornó 
      // I 'm confirm the cuantity of information wish return my
      // confirm the amount of information returned to me
      expect(DATAMOCK.findAll).toHaveLength(3);

            // confirmo la cantidad de información que me retornó 
      // I 'm confirm the cuantity of information wish return my
      // confirm the amount of information returned to me
      expect(await controller.findAll(DATAMOCK.Paginate,"")).toHaveLength(3);



    });

  });

  describe('find-one/:id', () => {
    it('should get a single  Asignaturas Curriculares', async () => {
      await expect(controller.findOne('a strange id')).resolves.toEqual({
        ...DATAMOCK.One,
        id: 'a strange id',
      });
      await expect(controller.findOne('a different id')).resolves.toEqual({
        ...DATAMOCK.One,
        id: 'a different id',
      });
    });



  });

  
  describe('update/:id', () => {


    it('should update a new Asignaturas Curriculares', async () => {
      const updateDto: UpdateDiaDto = DATAMOCK.One;

      await expect(controller.update('a uuid',updateDto)).resolves.toEqual({
        id: 'a uuid',
        ...updateDto,
      });
    });
  });

  describe('create/', () => {


    it('should create a new Asignaturas Curriculares', async () => {
      const CreateDto: CreateDiaDto = DATAMOCK.One;
      await expect(controller.create(CreateDto)).resolves.toEqual({
        id: '1',
        ...CreateDto,
      });
    });

  });

  describe('remove/', () => {


    it('should return that it deleted a cat', async () => {
      await expect(controller.remove('a uuid that exists')).resolves.toEqual(
        {
          deleted: true,
        },
      );
    });
    it('should return that it did not delete a cat', async () => {
      const deleteSpy = jest
        .spyOn(service, 'remove')
        .mockResolvedValueOnce({ deleted: false });
      await expect(
        controller.remove('a uuid that does not exist'),
      ).resolves.toEqual({ deleted: false });
      expect(deleteSpy).toBeCalledWith('a uuid that does not exist');
    });
  });

  
});
