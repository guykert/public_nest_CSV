
import mongoose from 'mongoose';

const mockObjectId = new mongoose.Types.ObjectId();

const Numero_pregunta = 1;
const Correcta = 'Test Correcta 1';
const Eje_tematico = mockObjectId;
const Habilidad_id = mockObjectId;
const page = 1;
const items_per_page = 10;


export const DATAMOCK = {
    Numero_pregunta : Numero_pregunta,
    Correcta : Correcta,
    Eje_tematico: Eje_tematico,
    Habilidad_id: Habilidad_id,

    findAll :
    [
        { numero_pregunta: Numero_pregunta, correcta: Correcta, eje_tematico: Eje_tematico, habilidad_id: Habilidad_id},
        { numero_pregunta: 2, correcta: 'Test Correcta 2', eje_tematico: Eje_tematico, habilidad_id: Habilidad_id},
        { numero_pregunta: 3, correcta: 'Test Correcta 3', eje_tematico: Eje_tematico, habilidad_id: Habilidad_id},
    ],
    One: {
        numero_pregunta: Numero_pregunta,
        correcta: Correcta,
        eje_tematico: Eje_tematico, 
        habilidad_id: Habilidad_id, 
    },
    OneResponse: {
        numero_pregunta: Numero_pregunta,
        correcta: Correcta,
        eje_tematico: Eje_tematico, 
        habilidad_id: Habilidad_id,
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
