
const Preguntas_correctas = 1;
const Puntaje = 122;
const page = 1;
const items_per_page = 10;


export const DATAMOCK = {
    Preguntas_correctas : Preguntas_correctas,
    Puntaje : Puntaje,

    findAll :
    [
        { preguntas_correctas: Preguntas_correctas, puntaje: Puntaje},
        { preguntas_correctas: 2, puntaje: 200},
        { preguntas_correctas: 3, puntaje: 300},
    ],
    One: {
        preguntas_correctas: Preguntas_correctas, 
        puntaje: Puntaje,
    },
    OneResponse: {
        preguntas_correctas: Preguntas_correctas, 
        puntaje: Puntaje,
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
