import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { USERS_SEED } from './data/users.seed';
import axios,{ AxiosInstance } from "axios";
import { UserResponse } from './interfaces/user-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/entities/user.entity';
import { Model } from 'mongoose';
import * as EmailValidator from 'email-validator';
import { PermisosResponse } from './interfaces/permisos-response.interface';
import { Permission } from '../permission/entities/permission.entity';
import { Role } from '../role/entities/role.entity';
import { RolesResponse } from './interfaces/roles-response.interface';
import { RolesPermisosResponse } from './interfaces/roles-permisos-response.interface';
import { AsignaturasCurriculare } from '../asignaturas-curriculares/entities/asignaturas-curriculare.entity';
import { AsignCurriResponse } from './interfaces/asign-curri-response.interface';
import { ConfiguracionAnio } from '../configuracion-anios/entities/configuracion-anio.entity';
import { configuracionAnioResponse } from './interfaces/configuracion-anio-response.interface';
import { Dia } from '../dia/entities/dia.entity';
import { Empresa } from '../empresa/entities/empresa.entity';
import { Letra } from '../letra/entities/letra.entity';
import { diaResponse } from './interfaces/dia-response.interface';
import { EmpresaResponse } from './interfaces/empresa-response.interface';
import { LetraResponse } from './interfaces/letra-response.interface';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios;

  constructor(

    @InjectModel( User.name )
    private readonly userModel: Model<User>,

    @InjectModel( Permission.name )
    private readonly permissionModel: Model<Permission>,

    @InjectModel( Role.name )
    private readonly roleModel: Model<Role>,

    @InjectModel( AsignaturasCurriculare.name )
    private readonly asignaturasCurriculareModel: Model<AsignaturasCurriculare>,

    @InjectModel( ConfiguracionAnio.name )
    private readonly configuracionAnioModel: Model<ConfiguracionAnio>,

    @InjectModel( Dia.name )
    private readonly diaModel: Model<Dia>,

    @InjectModel( Empresa.name )
    private readonly empresaModel: Model<Empresa>,

    @InjectModel( Letra.name )
    private readonly letraModel: Model<Letra>,

  ){}

  async populateDBUsuario() {

    await this.userModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<UserResponse>('http://www.desarrollos-csv.com/api/usuarios/get-template?id=1');

    const usersToInsert: {
      rut: string, 
      first_name: string, 
      last_name: string, 
      m_last_name: string, 
      email: string, 
      anio_predeterminado: number, 
      colegio_predeterminada: number,
      createdAt: Date
    }[] = [];


    data.Usuario.forEach( async ({rut, nombre, apellido_paterno,apellido_materno,email,anio_predeterminado,colegio_predeterminada}) => {

      

      const anio_predeterminado_int = parseInt(anio_predeterminado);
      let colegio_predeterminada_int = parseInt(colegio_predeterminada);

      if(isNaN(colegio_predeterminada_int)){
        colegio_predeterminada_int = 0;
      }


      if(email != "" && EmailValidator.validate(email)){

        usersToInsert.push({rut, first_name: nombre, last_name : apellido_paterno,m_last_name : apellido_materno,email,anio_predeterminado: anio_predeterminado_int,colegio_predeterminada: colegio_predeterminada_int,createdAt : new Date()});

      }
    })

    // console.log(usersToInsert);

    await this.userModel.insertMany(usersToInsert);

    return 'Ejecución Usuarios completa';
    
  }

  async populateDBPermisos() {

    await this.permissionModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<PermisosResponse>('http://www.desarrollos-csv.com/api/permisos/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date
    }[] = [];


    data.Rol.forEach( async ({name, description, fecha_creacion}) => {

        dataToInsert.push({name, description,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.permissionModel.insertMany(dataToInsert);

    return 'Ejecución Permisos completa';
    
  }

  async populateDBRoles() {


    await this.roleModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<RolesResponse>('http://www.desarrollos-csv.com/api/roles/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
      permissions: Permission[],
    }[] = [];

    // let arreglo = data.Rol.map(async function(rol, indice) {

    //   const {data: data2} = await this.axios.get<RolesPermisosResponse>(`http://www.desarrollos-csv.com/api/roles-permisos/get-template?id_rol=${rol.id}`);


    //   return rol.name;
    // });
    

    for (const dataRol of data.Rol) {

      const arrayPermisos  = [];

      const { id, name, description, fecha_creacion } = dataRol;

      const {data: data2} = await this.axios.get<RolesPermisosResponse>(`http://www.desarrollos-csv.com/api/roles-permisos/get-template?id_rol=${id}`);

      for (const dataRolHijo of data2.RolHijo) {

        arrayPermisos.push(dataRolHijo.name);
  
      }

      const permissions = await this.permissionModel.find({ name: arrayPermisos });

      dataToInsert.push({name, description,createdAt : new Date(fecha_creacion), permissions: permissions});

    }

    try {
  
      await this.roleModel.insertMany(dataToInsert);

    } catch (error) {

      console.log(error);

    }

    return 'Ejecución Roles completa';
    
  }

  async populateDBAsignaturasCurriculares() {


    await this.asignaturasCurriculareModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<AsignCurriResponse>('http://www.desarrollos-csv.com/api/asignaturas-curriculares/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      codigo: string, 
      createdAt: Date
    }[] = [];


    data.SubRamo.forEach( async ({nombre, descripcion, fecha_creacion, codigo}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion), codigo});


    })

    // console.log(usersToInsert);

    await this.asignaturasCurriculareModel.insertMany(dataToInsert);

    return 'Ejecución Asignaturas Curriculare completa';
    
  }

  async populateDBConfiguracionAnio() {


    await this.configuracionAnioModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<configuracionAnioResponse>('http://www.desarrollos-csv.com/api/configuracion/get-template?id=1');

    const dataToInsert: {
      name: string, 
      forzado: string, 
      createdAt: Date
    }[] = [];


    data.Configuracion.forEach( async ({anio_academico, anio_forzado, fecha_creacion}) => {

        dataToInsert.push({name : anio_academico, forzado : anio_forzado ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.configuracionAnioModel.insertMany(dataToInsert);

    return 'Ejecución Asignaturas Curriculare completa';
    
  }

  async populateDBDia() {


    await this.diaModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<diaResponse>('http://www.desarrollos-csv.com/api/dia/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Dia.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.diaModel.insertMany(dataToInsert);

    return 'Ejecución Dia completa';
    
  }

  async populateDBEmpresa() {


    await this.empresaModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<EmpresaResponse>('http://www.desarrollos-csv.com/api/empresa/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      identificador: string, 
      rbd: string, 
      encargado: string, 
      telefono: string, 
      telefono2: string, 
      contacto: string, 
      imagen: string, 
      createdAt: Date,
    }[] = [];


    data.Empresa.forEach( async ({nombre, descripcion, rut, rbd, director, telefono, telefonoepw, imagen, encargadopw, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion, identificador : rut, rbd, encargado: director, telefono, telefono2 :telefonoepw, contacto: encargadopw, imagen: imagen ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.empresaModel.insertMany(dataToInsert);

    return 'Ejecución Empresa completa';
    
  }

  async populateDBLetras() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBNivel() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPais() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaEjeTematico() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaHabilidad() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaPauta() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaSubEjeTematico() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaTablaComversion() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaTablaComversionDetalle() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBPruebaTipo() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBRamo() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBSexo() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBTipoAlumno() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }

  async populateDBTipoEmpresa() {


    await this.letraModel.deleteMany({});

    // this.usersService.fillUsersWhithSeedData( USERS_SEED );

    const {data} = await this.axios.get<LetraResponse>('http://www.desarrollos-csv.com/api/letra/get-template?id=1');

    const dataToInsert: {
      name: string, 
      description: string, 
      createdAt: Date,
    }[] = [];


    data.Letra.forEach( async ({nombre, descripcion, fecha_creacion}) => {

        dataToInsert.push({name : nombre, description : descripcion ,createdAt : new Date(fecha_creacion)});


    })

    // console.log(usersToInsert);

    await this.letraModel.insertMany(dataToInsert);

    return 'Ejecución Letra completa';
    
  }



}
