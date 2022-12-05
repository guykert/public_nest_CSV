import { Controller, Get} from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { ValidRoles } from '../auth/interfaces/valid-roles';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}


  @Get()
  // @Auth( ValidRoles.admin )
  async runSeed()  {
    return {
      usauarios : await this.seedService.populateDBUsuario(),
      permisos : await this.seedService.populateDBPermisos(),
      roles : await this.seedService.populateDBRoles(),
      AsignaturasCurriculares :  await this.seedService.populateDBAsignaturasCurriculares(),
      Dia :  await this.seedService.populateDBDia(),
      Empresa :  await this.seedService.populateDBEmpresa(),
      Letras :  await this.seedService.populateDBLetras(),
      Nivel :  await this.seedService.populateDBNivel(),
      Pais :  await this.seedService.populateDBPais(),
      PruebaEjeTematico :  await this.seedService.populateDBPruebaEjeTematico(),
      PruebaHabilidad :  await this.seedService.populateDBPruebaHabilidad(),
      PruebaPauta :  await this.seedService.populateDBPruebaPauta(),
      PruebaSubEjeTematico :  await this.seedService.populateDBPruebaSubEjeTematico(),
      PruebaTablaComversion :  await this.seedService.populateDBPruebaTablaComversion(),
      PruebaTablaComversionDetalle :  await this.seedService.populateDBPruebaTablaComversionDetalle(),
      PruebaTipo :  await this.seedService.populateDBPruebaTipo(),
      Ramo :  await this.seedService.populateDBRamo(),
      Sexo :  await this.seedService.populateDBSexo(),
      TipoAlumno :  await this.seedService.populateDBTipoAlumno(),
      TipoEmpresa :  await this.seedService.populateDBTipoEmpresa(),

      
    };
  }

}
