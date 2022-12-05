import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { handleException } from '../common/handleException';
import { linksPaginate } from '../common/linksPaginate';
import { CreateInglesDetalleDto } from './dto/create-ingles-detalle.dto';
import { UpdateInglesDetalleDto } from './dto/update-ingles-detalle.dto';
import { InglesDetalle } from './entities/ingles-detalle.entity';

@Injectable()
export class InglesDetalleService {

  private defaultLimit: number;

  constructor(
    @InjectModel( InglesDetalle.name )
    private readonly inglesDetalleModel: Model<InglesDetalle>,
    @InjectModel( InglesDetalle.name )
    private readonly inglesDetalleModelPag: PaginateModel<InglesDetalle>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }

  async create(createInglesDetalleDto: CreateInglesDetalleDto) {
    try {
      const user = await  this.inglesDetalleModel.create({...createInglesDetalleDto,createdAt: new Date()});

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




      const data = await this.inglesDetalleModelPag.paginate(query, options);

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
    // let data:InglesDetalle;

    // if( isValidObjectId(id)){

    //   data = await this.inglesDetalleModel.findById(id,{activo:0,createdAt:0,updatedAt:0});

    // }

    // if (!data)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return {data : data};

    return await this.inglesDetalleModel.findById(id,{activo:0,createdAt:0,updatedAt:0});
  }

  async update(id: string, updateInglesDetalleDto: UpdateInglesDetalleDto) {
    // try {
  
    //   return await this.inglesDetalleModel.findOneAndUpdate({ _id: id}, {...updateInglesDetalleDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.inglesDetalleModel.findOneAndUpdate({ _id: id}, {...updateInglesDetalleDto,updatedAt: new Date()}, { new: true });
  }

  async remove(id: string) {

    // try {
  
    //   await this.inglesDetalleModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.inglesDetalleModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

  }
}
