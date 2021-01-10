 function dogs(){
    fetch("https://api.thedogapi.com/v1/breeds")
    .then(response =>{
        if(!response.ok){
            
            throw Error("ERROR");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data);
        const html = data.map(user=>{
            return `
              <div class="row">
                  <div class="user">
                      <p><img src="${user.image.url}" id="image" alt="${user.name}"></p>
                      <p>Character No: ${user.id}</p>
                      <p>Name: ${user.name}</p>
                      <p>Life Span: ${user.life_span}</p>
                      <p>breed group: ${user.breed_group} </p>
                      <p>temperament: ${user.temperament} <P>
                      
                  </div>
              </div>`;
        })
        
        .join("");
        console.log(html);
        
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html); 
        
    })
    
    .catch(error=>{
        console.log(error);
    })
 
}
dogs()