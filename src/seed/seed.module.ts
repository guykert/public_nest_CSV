import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';
import { PermissionModule } from '../permission/permission.module';
import { RoleModule } from '../role/role.module';
import { AsignaturasCurricularesModule } from '../asignaturas-curriculares/asignaturas-curriculares.module';
import { ConfiguracionAniosModule } from '../configuracion-anios/configuracion-anios.module';
import { DiaModule } from '../dia/dia.module';
import { EmpresaModule } from '../empresa/empresa.module';
import { LetraModule } from '../letra/letra.module';
import { NivelModule } from '../nivel/nivel.module';
import { PaisModule } from '../pais/pais.module';
import { PruebaEjeTematicoModule } from '../prueba-eje-tematico/prueba-eje-tematico.module';
import { PruebaHabilidadModule } from '../prueba-habilidad/prueba-habilidad.module';
import { PruebaPautaModule } from '../prueba-pauta/prueba-pauta.module';
import { PruebaSubEjeTematicoModule } from '../prueba-sub-eje-tematico/prueba-sub-eje-tematico.module';
import { PruebaTablaComversionModule } from '../prueba-tabla-comversion/prueba-tabla-comversion.module';
import { PruebaTablaConversionDetalleModule } from '../prueba-tabla-conversion-detalle/prueba-tabla-conversion-detalle.module';
import { PruebaTipoModule } from '../prueba-tipo/prueba-tipo.module';
import { RamoModule } from '../ramo/ramo.module';
import { SexoModule } from '../sexo/sexo.module';
import { TipoAlumnoModule } from '../tipo-alumno/tipo-alumno.module';
import { TipoEmpresaModule } from '../tipo-empresa/tipo-empresa.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports:[
    UsersModule,
    AuthModule,
    PermissionModule,
    RoleModule,
    AsignaturasCurricularesModule,
    ConfiguracionAniosModule,
    DiaModule,
    EmpresaModule,
    LetraModule,
    NivelModule,
    PaisModule,
    PruebaEjeTematicoModule,
    PruebaHabilidadModule,
    PruebaPautaModule,
    PruebaSubEjeTematicoModule,
    PruebaTablaComversionModule,
    PruebaTablaConversionDetalleModule,
    PruebaTipoModule,
    RamoModule,
    SexoModule,
    TipoAlumnoModule,
    TipoEmpresaModule
  ]
})
export class SeedModule {}
