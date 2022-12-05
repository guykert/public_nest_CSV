import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { handleException } from '../common/handleException';
import { linksPaginate } from '../common/linksPaginate';
import { CreatePruebaHabilidadDto } from './dto/create-prueba-habilidad.dto';
import { UpdatePruebaHabilidadDto } from './dto/update-prueba-habilidad.dto';
import { PruebaHabilidad } from './entities/prueba-habilidad.entity';

@Injectable()
export class PruebaHabilidadService {

  private defaultLimit: number;

  constructor(
    @InjectModel( PruebaHabilidad.name )
    private readonly pruebaHabilidadModel: Model<PruebaHabilidad>,
    @InjectModel( PruebaHabilidad.name )
    private readonly pruebaHabilidadModelPag: PaginateModel<PruebaHabilidad>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }

  async create(createPruebaHabilidadDto: CreatePruebaHabilidadDto) {
    try {
      const user = await  this.pruebaHabilidadModel.create({...createPruebaHabilidadDto,createdAt: new Date()});

      return user;

    } catch (error) {

      handleException(error);

    }
  }

  async findAll(paginationDto: PaginationDto) {
    try {

      const { page = 1, items_per_page = this.defaultLimit, search="" } = paginationDto;

      const options = {
        page: page,
        limit: items_per_page,
      };

      let query: any = {

      };

      if(search != "" || search){

        query = {
          $or: [
            { name: new RegExp(search, 'i') },
            { description: new RegExp(search, 'i') },
          ],
        };

      }




      const data = await this.pruebaHabilidadModelPag.paginate(query, options);

      const links = linksPaginate(data.page,data.totalPages,data.pagingCounter,data.nextPage,data.prevPage);

      return  {

            data:data.docs,
            payload: {
                pagination:{
                    page:data.page,
                    first_page_url : "/?page=1",
                    from : data.pagingCounter,
                    last_page : data.totalPages,


                    next_page_url : "/?page=" + data.nextPage,
                    items_per_page : data.limit,
                    prev_page_url : data.hasPrevPage,
                    to : data.limit,
                    total : data.totalDocs,

                },
                links:links,
            },

            

        };


    } catch (error) {

        return error;

    }
  }

  async findOne(id: string) {
    // let data:PruebaHabilidad;

    // if( isValidObjectId(id)){

    //   data = await this.pruebaHabilidadModel.findById(id,{activo:0,createdAt:0,updatedAt:0});

    // }

    // if (!data)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return {data : data};

    return await this.pruebaHabilidadModel.findById(id,{activo:0,createdAt:0,updatedAt:0});

  }

  async update(id: string, updatePruebaHabilidadDto: UpdatePruebaHabilidadDto) {
    // try {
  
    //   return await this.pruebaHabilidadModel.findOneAndUpdate({ _id: id}, {...updatePruebaHabilidadDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.pruebaHabilidadModel.findOneAndUpdate({ _id: id}, {...updatePruebaHabilidadDto,updatedAt: new Date()}, { new: true });

  }

  async remove(id: string) {

    // try {
  
    //   await this.pruebaHabilidadModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.pruebaHabilidadModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

  }
}
