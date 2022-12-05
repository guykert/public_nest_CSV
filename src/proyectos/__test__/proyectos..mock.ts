
const Name = 'Test Name 1';
const Description = 'Test Description 1';
const page = 1;
const items_per_page = 10;


export const DATAMOCK = {
    Name : Name,
    Description : Description,

    findAll :
    [
        { name: Name, description: Description},
        { name: 'Test Name 2', description: 'Test Description 2'},
        { name: 'Test Name 3', description: 'Test Description 3'},
    ],
    One: {
        name: Name,
        description: Description,
    },
    OneResponse: {
        name: Name,
        description: Description,
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