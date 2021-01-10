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
              <div class="Details">
                  <div class="user">
                      <p><img src="${user.image.url}" id="Image" alt="${user.name}"></p>
                      <p>Character No: ${user.id}</p>
                      <p>Name: ${user.name}</p>
                      <p>Life Span: ${user.life_span}</p>
                      <p>Breed Group: ${user.breed_group} </p>
                      <p>Temperament: ${user.temperament} <P> 
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


var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}