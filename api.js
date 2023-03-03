const loadApi = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayCard(data.data.tools);
}

const displayCard = (cards)=>{
    const cardContainer = document.getElementById('card-container')
// showall button configure.

cards = cards.slice(0, 6);



    // api card show.
    cards.forEach(card =>{
        console.log(card)
        const cardDiv= document.createElement('div');
        cardDiv.classList.add('col');
        cardDiv.innerHTML = `
        

    <div class="card h-100">
        <img src="${card.image}" class="p-3 rounded card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <ol>
            <li>${card.features[0]}</li>
            <li>${card.features[1]}</li>
            <li>${card.features[2]}</li>
          </ol>

          <hr>

          <div class="d-flex justify-content-between align-items-center">
              <div>
              <h4>${card.name}</h4>
              <p style="color:#585858;" class="card-text"><span> <i class="fa-solid fa-calendar-days"></i></span> ${card.published_in}</p>
              </div>
              <div>
              <button style="background-color: #FEF7F7;" type="button" class="btn btn-primary rounded-circle" data-bs-toggle="modal" data-bs-target="#cardsModal"><span style="color: #EB5757;"><i class="fa-solid fa-arrow-right"></i></span></button>
              </div>
          </div>

        </div>

      </div>
         
        
        `

        cardContainer.appendChild(cardDiv);
    });
    toggleSpinner(false);
}


const toggleSpinner = isLodding => {
  const loadSection = document.getElementById('loader')
   if(isLodding){
      loadSection.classList.remove('d-none')
   }
   else{
      loadSection.classList.add('d-none')
   }
}

// show cards default 

const cardsShow =()=>{
  
  loadApi();
}


// see more function
document.getElementById('btn-see-more').addEventListener('click', function(){
  toggleSpinner(true);
  cardsShow()

  const seeMorebtn = document.getElementById('see-more')
   seeMorebtn.classList.add('d-none')
})

document.getElementById('sort-by-date').addEventListener('click', async function() {
    toggleSpinner(true);
    cardContainer.innerContent = ""
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    const cards = data.data.tools;
    const getCardDate = (card) => new Date(card.published_in);
    const cardsSorted = cards.sort((a, b) => getCardDate(a) - getCardDate(b));
    console.log(cardsSorted);
    // Reload the API data with the sorted cards
    loadApi();
});




loadApi();


// modal function