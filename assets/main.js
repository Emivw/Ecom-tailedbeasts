let arr = JSON.parse(localStorage.getItem("property")) ?
    JSON.parse(localStorage.getItem("property")) : [{
            id: 1,
            title: "Kurama",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "AlliedForces",
            img: `./media/9tails.jpg`,
            price: 9000,
        },
        {
            id: 2,
            title: "Gyūki",
            classification: "Tailed Beast",
            species: "Ushi-oni",
            affiliation: "AlliedForces",
            img: `./media/8tails.jpg`,
            price: 8000,
        },
        {
            id: 3,
            title: "Chōmei",
            classification: "Tailed Beast",
            species: "Kabutomushi",
            affiliation: "Takigakure",
            img: `./media/seventails.jpg`,
            price: 7000,
        },
        {
            id: 4,
            title: "Saiken",
            classification: "Tailed Beast",
            species: "Slug",
            affiliation: "Kirigakure",
            img: `./media/slug.jpg`,
            price: 6000,
        },
        {
            id: 5,
            title: "Kokuō",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: `./media/ape.jpg`,
            price: 7000,
        },
        {
            id: 6,
            title: "Son Gokū",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Iwagakure",
            img: `./media/ape.jpg`,
            price: 5000,
        },
        {
            id: 7,
            title: "Isobu",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Kirigakure",
            img: `./media/ape.jpg`,
            price: 6000,
        },
        {
            id: 8,
            title: "Matatabi",
            classification: "Tailed Beast",
            species: "Bakeneko",
            affiliation: "Kumogakure",
            img: `./media/ape.jpg`,
            price: 6000,
        },
        {
            id: 9,
            title: "10 tails",
            classification: "Tailed Jinjuriki",
            species: "Kitsune",
            affiliation: "AlliedForces",
            img: `./media/ape.jpg`,
            price: 10000,
        },
        {
            id: 10,
            title: "Desolate",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "AlliedForces",
            img: `./media/ape.jpg`,
            price: 10000,
        },
    ];

// localStorage.removeItem('property')

// displays data in array
let properties = document.getElementById("properties");

function loadData(n) {
    properties.innerHTML = "";
    n.forEach((item, index) => {
        properties.innerHTML += `
  <div class="card bg-dark p-3 m-3 mx-auto" data-aos="flip-right"
  data-aos-duration="1500" data-aos-delay="150">
    <img src="${item.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5>Name: ${item.title}</h5>
    <h6 class="card-title">${item.classification}</h6>
      <p class="card-text">Price: R${item.price.toFixed(2)}/pm</p>
      <!-- Icons -->
      <div class="d-flex justify-content-around">
        <p><i class="fa-solid fa-heart"></i><br> ${item.affiliation}</p>
        <p><i class="fa-solid fa-star"></i> <br>${item.species}</p>
 
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
          <div class="modal-content bg-dark">
              <div class="modal-header">
                  <h5 class="modal-title" id="propertyLabel">${
                    item.title
                  }</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="row">
                  <div class="col-5">
                    <img src="${item.img}" class="img-fluid">
                  </div>
                  <div class="col-6">
                    <label>type: </label>
                    <p><i class="fa-solid fa-address-card"></i> ${
                      item.species
                    }</p>
                    <label>Affiliation: </label>
                    <p><i class="fa-solid fa-globe"></i> ${item.affiliation}</p>
                    <label>classification: </label>
                    <p><i class="fa-solid fa-key"></i> ${item.classification}</p>
                    
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