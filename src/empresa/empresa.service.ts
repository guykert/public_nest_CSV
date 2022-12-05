import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import { handleException } from '../common/handleException';
import { linksPaginate } from '../common/linksPaginate';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {

  private defaultLimit: number;

  constructor(
    @InjectModel( Empresa.name )
    private readonly empresaModel: Model<Empresa>,
    @InjectModel( Empresa.name )
    private readonly empresaModelPag: PaginateModel<Empresa>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }

  async create(createEmpresaDto: CreateEmpresaDto) {
    try {
      const user = await  this.empresaModel.create({...createEmpresaDto,createdAt: new Date()});

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




      const data = await this.empresaModelPag.paginate(query, options);

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
    // let data:Empresa;

    // if( isValidObjectId(id)){

    //   data = await this.empresaModel.findById(id,{activo:0,createdAt:0,updatedAt:0});

    // }

    // if (!data)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return {data : data};


    return  await this.empresaModel.findById(id,{activo:0,createdAt:0,updatedAt:0});
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    // try {
  
    //   return await this.empresaModel.findOneAndUpdate({ _id: id}, {...updateEmpresaDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.empresaModel.findOneAndUpdate({ _id: id}, {...updateEmpresaDto,updatedAt: new Date()}, { new: true });
  }

  async remove(id: string) {

    // try {
  
    //   await this.empresaModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.empresaModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

  }
}
