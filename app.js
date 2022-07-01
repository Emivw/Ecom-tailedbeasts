let arr = JSON.parse(localStorage.getItem("property")) ?
    JSON.parse(localStorage.getItem("property")) : [{
            id: 1,
            type: "oak",
            Year: "Rondebosch East",
            Owner: "Hermione Granger",
            picture: `./images/wand1.jpg`,
            length: 16,
            bathrooms: 4,
            garage: 900,
            price: 7000,
        },
        {
            id: 2,
            type: "holy",
            Owner: "Snape",
            Year: "1991",
            picture: `./images/wand.jpg`,
            length: 10,
            bathrooms: 5,
            garage: 478,
            price: 5000,
        },
        {
            id: 3,
            type: "holy",
            Owner: "Harry Potter",
            Year: "1010",
            picture: `./images/wand2.jfif`,
            length: 18,
            bathrooms: 5,
            garage: 10000,
            price: 9500,
        },
        {
            id: 4,
            type: "Laurel",
            Owner: "Snape",
            Year: "Leew22ard",
            picture: `./images/wand3.jfif`,
            length: 11,
            bathrooms: 1,
            garage: 2,
            price: 5000,
        },
        {
            id: 5,
            type: "holy",
            Owner: "Sirus ",
            Year: "Jupiter",
            picture: `./images/wand4.jfif`,
            length: 11,
            bathrooms: 1,
            garage: 1,
            price: 5000,
        },
        {
            id: 6,
            type: "oak",
            Owner: "Dumbledore",
            Year: "Rondebosh East",
            picture: `./images/wand5.jpg`,
            length: 11,
            bathrooms: 1,
            garage: 1,
            price: 5000,
        },
        {
            id: 7,
            type: "holy",
            Owner: "Ron",
            Year: "1991",
            picture: `./images/wand6.jfif`,
            length: 11,
            bathrooms: 1,
            garage: 1,
            price: 5000,
        },
        {
            id: 8,
            type: "Laurel",
            Owner: "twins",
            Year: "1989",
            picture: `./images/wand7.jpg`,
            length: 11,
            bathrooms: 1,
            garage: 1,
            price: 5000,
        },
        {
            id: 9,
            type: "oak",
            Owner: "Lord",
            Year: "1890",
            picture: `./images/wand8.jpg`,
            length: 4,
            bathrooms: 4,
            garage: 5,
            price: 10000,
        },
        {
            id: 10,
            type: "Laurel",
            Owner: "Mr Weasly",
            Year: "1991",
            picture: `./images/wand9.jpg`,
            length: 2,
            bathrooms: 2,
            garage: 3,
            price: 7800,
        },
        {
            id: 11,
            type: "holy",
            Owner: "hadrid",
            Year: "1890",
            picture: `./images/wand10.jpg`,
            length: 3,
            bathrooms: 2,
            garage: 1,
            price: 9000,
        },
        {
            id: 12,
            type: "Laurel",
            Year: "1989",
            Owner: "malfoy",
            picture: `./images/wand11.jpg`,
            length: 2,
            bathrooms: 3,
            garage: 2,
            price: 5000,
        },
    ];
// localStorage.removeItem('property')

// displays data in array
let properties = document.getElementById("properties");

function loadData(n) {
    properties.innerHTML = "";
    n.forEach((item, index) => {
        properties.innerHTML += `
  <div class="card p-3 m-3 mx-auto" data-aos="flip-right"
  data-aos-duration="1500" data-aos-delay="150">
    <img src="${item.picture}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5>Owner: ${item.Owner}</h5>
    <h6 class="card-title">${item.Year}</h6>
      <p class="card-text">Price: R${item.price.toFixed(2)}/pm</p>
      <p class="card-text">wood Type: ${item.type}</p>
      <!-- Icons -->
      <div class="d-flex justify-content-around">
        <p><i class="fa-solid fa-ruler"></i> ${item.length}</p>
        <p><i class="fa-solid fa-star"></i> ${item.bathrooms}</p>
        <p><i class="fa-solid fa-medal"></i> ${item.garage}</p>
      </div>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#property${index}">
        View
      </button>
    </div>
  </div>
  <!--  -->
  <!-- Modal -->
  <div class="modal fade" id="property${index}" tabindex="-1" aria-labelledby="propertyLabel" aria-hidden="true" data-aos="flip-left">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="propertyLabel">${
                    item.Owner
                  }</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="row">
                  <div class="col-5">
                    <img src="${item.picture}" class="img-fluid">
                  </div>
                  <div class="col-6">
                    <label>wood type: </label>
                    <p><i class="fa-solid fa-building-user"></i> ${
                      item.type
                    }</p>
                    <label>Bedrooms: </label>
                    <p><i class="fa-solid fa-bed"></i> ${item.length}</p>
                    <label>Bathrooms: </label>
                    <p><i class="fa-solid fa-shower"></i> ${item.bathrooms}</p>
                    
                    <label>Garage Space: </label>
                    <p><i class="fa-solid fa-car"></i> ${item.garage}</p>
                  </div>
              </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
      </div>
  </div>
  <!--  -->
    `;
    });
}
loadData(arr);

// Sorts by wood type
function sortType(type) {
    if (type.target.value === 'all') {
        return loadData(arr)
    }

    let typeArr = arr.filter((x) => {
        return x.type == type.target.value;
    });
    loadData(typeArr);
}
document.getElementById("property").addEventListener("change", sortType);

// sorts by Location
function sortYear(Year) {
    if (Year.target.value === 'all') {
        return loadData(arr)
    }
    let locArr = arr.filter((x) => {
        return x.Year == Year.target.value;
    });
    loadData(locArr);
}
document.getElementById("Year").addEventListener("change", sortYear);

// sorts by length
function sortBedroom(size) {
    if (size.target.value === 'all') {
        return loadData(arr)
    }

    let bedArr = arr.filter((x) => {
        return x.length <= size.target.value;
    });
    console.table(bedArr)
    loadData(bedArr);
}
document.getElementById("size").addEventListener("change", sortBedroom);

// sorts by budget
function sortBudget(price) {
    if (price.target.value === 'all') {
        return loadData(arr)
    }

    let sortPrice = arr.filter((p) => {
        return p.price <= price.target.value;
    });
    loadData(sortPrice);
}
document.getElementById("budget").addEventListener("change", sortBudget);