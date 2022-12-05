import { BadRequestException,InternalServerErrorException } from '@nestjs/common';

export function handleException(error: any) {

    switch (error.code) {
        case 11000: // duplicate exception
          throw new BadRequestException(`El usuario ya existe en la base de datos ${ JSON.stringify( error.keyValue )}`);
        default:
          throw new InternalServerErrorException(`Can't create user - check server logs`);
    }
  }