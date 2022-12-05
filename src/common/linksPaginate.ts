export function linksPaginate(page:number, totalPages:number,pagingCounter:number,nextPage:number,prevPage:number) {
    const links = [];

    links.push({
        url: prevPage,
        label: "&laquo; Previous",
        active: false, 
        page: prevPage
    });

    for (let index = page; index <= totalPages; index++) {
 
      if(page == index){
          links.push({
              url: `/?page${index}`,
              label: "&laquo; Previous",
              active: true, 
              page: index
          });
      }else{
        links.push({
            url: `/?page${index}`,
            label: "&laquo; Previous",
            active: false, 
            page: index
        });
      }

      
    }

    links.push({
        url: `/?page${nextPage}`,
        label: "&laquo; Previous",
        active: false, 
        page: nextPage
    });

    return links;
  }