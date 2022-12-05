import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, PaginateModel } from 'mongoose';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { handleException } from '../common/handleException';
import { PaginationDto } from '../common/dto/pagination.dto';
import { linksPaginate } from '../common/linksPaginate';
import { Permission } from '../permission/entities/permission.entity';

@Injectable()
export class RoleService {

  private defaultLimit: number;

  constructor(
    @InjectModel( Role.name )
    private readonly roleModel: Model<Role>,
    @InjectModel( Role.name )
    private readonly roleModelPag: PaginateModel<Role>,

    @InjectModel( Permission.name )
    private readonly permissionModel: Model<Permission>,

    private readonly configService:ConfigService,
  ){

    this.defaultLimit = this.configService.get<number>('defaultLimit')

  }


  async create(createRoleDto: CreateRoleDto) {
    try {


      const arrayPermisos: Permission[] = [];


      const permission = await this.permissionModel.findOne({ name: 'acceso_api' });

      arrayPermisos.push(permission);

      createRoleDto.permissions = arrayPermisos;

      const data = await  this.roleModel.create({...createRoleDto,createdAt: new Date()});

      return data;

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
        populate : 'permissions',
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




      const data = await this.roleModelPag.paginate(query, options);



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
    // let role:Role;

    // if( isValidObjectId(id)){

    //   role = await (await this.roleModel.findById(id,{activo:0,createdAt:0,updatedAt:0}).populate('permissions'));

    // }

    // if (!role)
    //     throw new NotFoundException(`User with id " ${ id }" not found`);


    // return {data : role};

    return await (await this.roleModel.findById(id,{activo:0,createdAt:0,updatedAt:0}).populate('permissions'));

  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {

    // try {
  
    //   return await this.roleModel.findOneAndUpdate({ _id: id}, {...updateRoleDto,updatedAt: new Date()}, { new: true });

    // } catch (error) {

    //   handleException(error);

    // }

    return await this.roleModel.findOneAndUpdate({ _id: id}, {...updateRoleDto,updatedAt: new Date()}, { new: true });

  }

  async remove(id: string) {

    // try {
  
    //   await this.roleModel.findByIdAndDelete(id);

    // } catch (error) {

    //   handleException(error);

    // }

    try {

      await this.roleModel.findByIdAndDelete(id);

      return { deleted: true };



    } catch (error) {

      // handleException(error);

      // return { deleted: false, message: error.message };
      return { deleted: false, message: 'Bad Delete Method.' };

    }

  }
}
