// import { getConnectionToken, getModelToken, MongooseModule } from "@nestjs/mongoose";
// import { Test, TestingModule } from "@nestjs/testing";
// import { Model } from "mongoose";
// import { AppModule } from "src/app.module";
// import { AsignaturasCurricularesModule } from "../asignaturas-curriculares.module";
// import { AsignaturasCurriculare, AsignaturasCurriculareSchema } from "./asignaturas-curriculare.entity";

// describe('User', () => {

//   let asignaturasCurriculareModel: Model<AsignaturasCurriculare>;

//     // beforeEach(async () => {
//     //     const module: TestingModule = await Test.createTestingModule({
//     //       imports: [
//     //         AsignaturasCurricularesModule,
//     //         MongooseModule.forFeature([{ name: AsignaturasCurriculare.name, schema: AsignaturasCurriculareSchema }]),
//     //       ],

//     //     }).compile();

    
//     //     asignaturasCurriculareModel = module.get<Model<AsignaturasCurriculare>>(AsignaturasCurriculare.name);
    
//     //   });

//     it('should be defined', () => {
//       expect(new asignaturasCurriculareModel(new AsignaturasCurriculare ({
//         name: 'Test Name 2',
//         description: 'Test Description 2',

//       }))).toBeDefined();
//     });
//   });



// describe('ContactEntity', () => {
//   it('should be defined', () => {
//     expect(new AsignaturasCurriculare()).toBeDefined();
//   });
// });

// import { Cat } from './cat.entity';

// describe('Cat class', () => {
//   it('should make a cat with no fields', () => {
//     const cat = new Cat();
//     expect(cat).toBeTruthy();
//     expect(cat.name).toBe('');
//     expect(cat.breed).toBe('');
//     expect(cat.age).toBe(NaN);
//   });
//   it('should make a cat with name only', () => {
//     const cat = new Cat('Test');
//     expect(cat).toBeTruthy();
//     expect(cat.name).toBe('Test');
//     expect(cat.breed).toBe('');
//     expect(cat.age).toBe(NaN);
//   });
//   it('should make a cat with name and breed', () => {
//     const cat = new Cat('Test', 'Breed');
//     expect(cat).toBeTruthy();
//     expect(cat.name).toBe('Test');
//     expect(cat.breed).toBe('Breed');
//     expect(cat.age).toBe(NaN);
//   });
//   it('should make a cat with name breed and age', () => {
//     const cat = new Cat('Test', 'Breed', 4);
//     expect(cat).toBeTruthy();
//     expect(cat.name).toBe('Test');
//     expect(cat.breed).toBe('Breed');
//     expect(cat.age).toBe(4);
//   });
// });