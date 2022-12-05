import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { handleException } from '../common/handleException';
import { linksPaginate } from '../common/linksPaginate';
import { CreateDiaDto } from './dto/create-dia.dto';
import { UpdateDiaDto } from './dto/update-dia.dto';
import { Dia } from './entities/dia.entity';

@Injectable()
export class DiaService {

  private defaultLimit: number;

  constructor(
    @InjectModel( Dia.name )
    private readonly diaModel: Model<Dia>,
    @InjectModel( Dia.name )
    private readonly diaModelPag: PaginateModel<Dia>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }

  async create(createDiaDto: CreateDiaDto) {
    try {
      const user = await  this.diaModel.create({...createDiaDto,createdAt: new Date()});

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




      const data = await this.diaModelPag.paginate(query, options);

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
    // let data:Dia;

    // if( isValidObjectId(id)){

    //   data = await this.diaModel.findById(id,{activo:0,createdAt:0,updatedAt:0});

    // }

    // if (!data)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return {data : data};

    return await this.diaModel.findById(id,{activo:0,createdAt:0,updatedAt:0});
  }

  async update(id: string, updateDiaDto: UpdateDiaDto) {
    // try {
  
    //   return await this.diaModel.findOneAndUpdate({ _id: id}, {...updateDiaDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.diaModel.findOneAndUpdate({ _id: id}, {...updateDiaDto,updatedAt: new Date()}, { new: true });
  }

  async remove(id: string) {

    // try {
  
    //   await this.diaModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.diaModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

  }
}
