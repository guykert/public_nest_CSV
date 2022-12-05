import { Injectable, NotFoundException,BadRequestException,InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { v4 as uuid } from "uuid";
import { InjectModel } from "@nestjs/mongoose";
import { linksPaginate } from '../common/linksPaginate';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { PaginationDto } from '../common/dto/pagination.dto';
import {ConfigService} from '@nestjs/config'
import { handleException } from '../common/handleException';

@Injectable()
export class UsersService {

  private defaultLimit: number;

  constructor(
    @InjectModel( User.name )
    private readonly userModel: Model<User>,
    @InjectModel( User.name )
    private readonly userModelPag: PaginateModel<User>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }

  private users: User[] = [
    //   {
    //     id: uuid(),
    //     first_name: "Claudio",
    //     last_name: "Santibanez",
    //     email: "claudio.santibanez@gmail.com",
    //     idg: uuid(),
    //     first_nameg: "Claudio",
    //     last_nameg: "Santibanez",
    //     emailg: "claudio.santibanez@gmail.com",
    //     rut: "13504572-1",
    //     createdAt : new Date().getTime(),
    //     updatedAt : new Date().getTime(),

    // }
  ]


  async create(createUserDto: CreateUserDto) {


    try {
      const user = await  this.userModel.create({createUserDto,createdAt: new Date()});

      return user;

    } catch (error) {

      handleException(error);

    }
    
  }

  async findAll(paginationDto: PaginationDto) {
    try {

      const { page = 1, items_per_page = this.defaultLimit } = paginationDto;

      const query: any = {

      };

      const options = {
        page: page,
        limit: items_per_page,
      };

      const data = await this.userModelPag.paginate(query, options);

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

    // let user:User;

    // if( isValidObjectId(id)){

    //   user = await this.userModel.findById(id);

    // }

    // if (!user)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return user;

    return await this.userModel.findById(id);

  }

  async update(id: string, updateUserDto: UpdateUserDto) {

    // try {
  
    //   return await this.userModel.findOneAndUpdate({ _id: id}, {...updateUserDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.userModel.findOneAndUpdate({ _id: id}, {...updateUserDto,updatedAt: new Date()}, { new: true });

  }
  

  async remove(id: string) {

    // try {
  
    //   await this.userModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.userModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

    

  }

  fillUsersWhithSeedData( users: User[]){
    this.users = users
  }

}
