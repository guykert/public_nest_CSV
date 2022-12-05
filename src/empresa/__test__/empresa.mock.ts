
const Name = 'Test Name 1';
const Description = 'Test Description 1';
const Identificador = 'Test Identificador 1';
const Rbd = 'Test Rbd 1';
const Encargado = 'Test Encargado 1';
const Telefono = 'Test Telefono 1';
const Telefono2 = 'Test Telefono2 1';
const Contacto = 'Test Contacto 1';
const Imagen = 'Test Imagen 1';




const page = 1;
const items_per_page = 10;


export const DATAMOCK = {
    Name : Name,
    Description : Description,

    findAll :
    [
        { name: Name, description: Description, identificador: Identificador, rbd: Rbd, encargado: Encargado, 
            telefono: Telefono, telefono2: Telefono2,contacto: Contacto, imagen: Imagen},
        { name: 'Test Name 2', description: 'Test Description 2', identificador: 'Test Identificador 2', rbd: 'Test Rbd 2', encargado: 'Test Encargado 2', 
        telefono: 'Test Telefono 2', telefono2: 'Test Telefono2 2',contacto: 'Test Contacto 2', imagen: 'Test Imagen 2'},
        { name: 'Test Name 3', description: 'Test Description 3', identificador: 'Test Identificador 3', rbd: 'Test Rbd 3', encargado: 'Test Encargado 3', 
        telefono: 'Test Telefono 3', telefono2: 'Test Telefono2 3',contacto: 'Test Contacto 3', imagen: 'Test Imagen 3'},
    ],
    One: {
        name: Name,
        description: Description,
        identificador: Identificador, 
        rbd: Rbd, 
        encargado: Encargado, 
        telefono: Telefono, 
        telefono2: Telefono2,
        contacto: Contacto, 
        imagen: Imagen
    },
    OneResponse: {
        name: Name,
        description: Description,
        identificador: Identificador, 
        rbd: Rbd, 
        encargado: Encargado, 
        telefono: Telefono, 
        telefono2: Telefono2,
        contacto: Contacto, 
        imagen: Imagen,
        id: 'a uuid'
    },
    Paginate: {
        page: page,
        items_per_page: items_per_page,
    },
    paginateResult:{
        "data": undefined, 
        "payload": 
        {
            "links": [
                {"active": false, "label": "&laquo; Previous", "page": undefined, "url": undefined}, 
                {"active": false, "label": "&laquo; Previous", "page": undefined, "url": "/?pageundefined"}
            ], 
            "pagination": 
            {
                "first_page_url": "/?page=1", 
                "from": undefined, 
                "items_per_page": undefined, 
                "last_page": undefined, 
                "next_page_url": "/?page=undefined", 
                "page": undefined, 
                "prev_page_url": undefined, 
                "to": undefined, 
                "total": undefined
            }
        }
    }

};
