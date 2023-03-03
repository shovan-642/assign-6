let cards = [];

const loadApi = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  cards = data.data.tools;
  displayCard(cards.slice(0, 6));
};

const displayCard = (cards) => {
  const cardContainer = document.getElementById('card-container');

  // show default 6 cards
  cards.forEach((card) => {
    const cardDiv = document.createElement('div');
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
    `;
    cardContainer.appendChild(cardDiv);
  });
}

// show all cards when see-more button is clicked
document.getElementById('btn-see-more').addEventListener('click', function () {
  if (cards.length > 6) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    cards.forEach((card) => {
      const cardDiv = document.createElement('div');
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
    `;
    cardContainer.appendChild(cardDiv);
  });
}