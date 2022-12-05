import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';
import { AuthModule } from './auth/auth.module';
import { PermissionModule } from './permission/permission.module';
import { RoleModule } from './role/role.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { ConfiguracionAniosModule } from './configuracion-anios/configuracion-anios.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TipoEmpresaModule } from './tipo-empresa/tipo-empresa.module';
import { TipoAlumnoModule } from './tipo-alumno/tipo-alumno.module';
import { DiaModule } from './dia/dia.module';
import { RamoModule } from './ramo/ramo.module';
import { AsignaturasCurricularesModule } from './asignaturas-curriculares/asignaturas-curriculares.module';
import { SexoModule } from './sexo/sexo.module';
import { NivelModule } from './nivel/nivel.module';
import { LetraModule } from './letra/letra.module';
import { PaisModule } from './pais/pais.module';
import { PruebaTipoModule } from './prueba-tipo/prueba-tipo.module';
import { PruebaTablaComversionModule } from './prueba-tabla-comversion/prueba-tabla-comversion.module';
import { PruebaAlumnoModule } from './prueba-alumno/prueba-alumno.module';
import { PruebaHabilidadModule } from './prueba-habilidad/prueba-habilidad.module';
import { PruebaEjeTematicoModule } from './prueba-eje-tematico/prueba-eje-tematico.module';
import { PruebaSubEjeTematicoModule } from './prueba-sub-eje-tematico/prueba-sub-eje-tematico.module';
import { PruebaPautaModule } from './prueba-pauta/prueba-pauta.module';
import { PruebaTablaConversionDetalleModule } from './prueba-tabla-conversion-detalle/prueba-tabla-conversion-detalle.module';
import { MenuTipoModule } from './menu-tipo/menu-tipo.module';
import { MenuModule } from './menu/menu.module';
import { InglesModule } from './ingles/ingles.module';
import { InglesDetalleModule } from './ingles-detalle/ingles-detalle.module';
import { CursoAprenderModule } from './curso-aprender/curso-aprender.module';
import { CursoAprenderDetalleModule } from './curso-aprender-detalle/curso-aprender-detalle.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),
    MongooseModule.forRoot(process.env.MONGODB),
    UsersModule, 
    SeedModule, 
    CommonModule, 
    AuthModule, 
    PermissionModule, 
    RoleModule, 
    ProyectosModule, 
    ConfiguracionAniosModule, 
    EmpresaModule, 
    TipoEmpresaModule, 
    TipoAlumnoModule, 
    DiaModule, 
    RamoModule, 
    AsignaturasCurricularesModule, 
    SexoModule, 
    NivelModule, 
    LetraModule, 
    PaisModule, 
    PruebaTipoModule, 
    PruebaTablaComversionModule, 
    PruebaAlumnoModule, 
    PruebaHabilidadModule, 
    PruebaEjeTematicoModule, 
    PruebaSubEjeTematicoModule,
    PruebaPautaModule,
    PruebaTablaConversionDetalleModule,
    MenuTipoModule,
    MenuModule,
    InglesModule,
    InglesDetalleModule,
    CursoAprenderModule,
    CursoAprenderDetalleModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
