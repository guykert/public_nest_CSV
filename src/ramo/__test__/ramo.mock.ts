
const Name = 'Test Name 1';
const Description = 'Test Description 1';
const Codigo = 'Test Codigo 1';
const Orden = 21;
const Division_menciones = 31;


const page = 1;
const items_per_page = 10;


export const DATAMOCK = {
    Name : Name,
    Description : Description,
    Codigo : Codigo,
    Orden : Orden,
    Division_menciones : Division_menciones,


    findAll :
    [
        { name: Name, description: Description, codigo: Codigo, orden: Orden, division_menciones: Division_menciones},
        { name: 'Test Name 2', description: 'Test Description 2', codigo: 'Test Codigo 2', orden: 22, division_menciones: 32},
        { name: 'Test Name 3', description: 'Test Description 3', codigo: 'Test Codigo 3', orden: 23, division_menciones: 33},
    ],
    One: {
        name: Name,
        description: Description,
        codigo: Codigo,
        orden: Orden, 
        division_menciones: Division_menciones,
    },
    OneResponse: {
        name: Name,
        description: Description,
        codigo: Codigo, 
        orden: Orden, 
        division_menciones: Division_menciones,
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
