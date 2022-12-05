

export interface JwtPayload{
    id:string;
    activo: boolean;
    registrado: boolean;

    // Agregar todo lo que se quiera grabar en el token
}