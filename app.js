let arr = JSON.parse(localStorage.getItem("property"))
  ? JSON.parse(localStorage.getItem("property"))
  : [
  {
    id: 1,
    type: "Residential",
    location: "Rondebosch East",
    address: "Metro Plaza Dr",
    picture: `./images/wand1.jpg`,
    bedrooms: 3,
    bathrooms: 2,
    garage: 3,
    price: 7000,
  },
  {
    id: 2,
    type: "Apartment",
    address: "65 Lawson Rd",
    location: "Belgravia",
    picture: `./images/wand.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 3,
    type: "Apartment",
    address: "Quincy St",
    location: "Jupiter",
    picture: `./images/wand2.jfif`,
    bedrooms: 3,
    bathrooms: 2,
    garage: 3,
    price: 9500,
  },
  {
    id: 4,
    type: "Commercial",
    address: "65 Lawson Rd",
    location: "Leeward",
    picture: `./images/wand3.jfif`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 5,
    type: "Apartment",
    address: "87-656 Farrington Highway A",
    location: "Jupiter",
    picture: `./images/wand4.jfif`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 6,
    type: "Residential",
    address: "41-157 Nalu Street",
    location: "Rondebosh East",
    picture: `./images/wand5.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 7,
    type: "Apartment",
    address: "87-1409 Akowai Road",
    location: "Belgravia",
    picture: `./images/wand6.jfif`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 8,
    type: "Commercial",
    address: "1946 Pauoa Road A",
    location: "Athlone",
    picture: `./images/wand7.jpg`,
    bedrooms: 1,
    bathrooms: 1,
    garage: 1,
    price: 5000,
  },
  {
    id: 9,
    type: "Residential",
    address: "87-280 Laulele Street",
    location: "Leeward",
    picture: `./images/wand8.jpg`,
    bedrooms: 4,
    bathrooms: 4,
    garage: 5,
    price: 10000,
  },
  {
    id: 10,
    type: "Commercial",
    address: " 85-929 midway Street",
    location: "Belgravia",
    picture: `./images/wand9.jpg`,
    bedrooms: 2,
    bathrooms: 2,
    garage: 3,
    price: 7800,
  },
  {
    id: 11,
    type: "Apartment",
    address: "87-1013 Kahiwelola Street",
    location: "Leeward",
    picture: `./images/wand10.jpg`,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    price: 9000,
  },
  {
    id: 12,
    type: "Commercial",
    location: "Athlone",
    address: "8100 S Ashland Ave",
    picture: `./images/wand11.jpg`,
    bedrooms: 2,
    bathrooms: 3,
    garage: 2,
    price: 5000,
  },
]
;
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
    <h5>Address: ${item.address}</h5>
    <h6 class="card-title">${item.location}</h6>
      <p class="card-text">Price: R${item.price.toFixed(2)}/pm</p>
      <p class="card-text">Property Type: ${item.type}</p>
      <!-- Icons -->
      <div class="d-flex justify-content-around">
        <p><i class="fa-solid fa-bed"></i> ${item.bedrooms}</p>
        <p><i class="fa-solid fa-shower"></i> ${item.bathrooms}</p>
        <p><i class="fa-solid fa-car"></i> ${item.garage}</p>
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
                    item.address
                  }</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <div class="row">
                  <div class="col-5">
                    <img src="${item.picture}" class="img-fluid">
                  </div>
                  <div class="col-6">
                    <label>Property type: </label>
                    <p><i class="fa-solid fa-building-user"></i> ${
                      item.type
                    }</p>
                    <label>Bedrooms: </label>
                    <p><i class="fa-solid fa-bed"></i> ${item.bedrooms}</p>
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

// Sorts by property type
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
function sortLocation(location) {
  if (location.target.value === 'all') {
    return loadData(arr)
    }
  let locArr = arr.filter((x) => {
    return x.location == location.target.value;
  });
  loadData(locArr);
}
document.getElementById("location").addEventListener("change", sortLocation);

// sorts by bedrooms
function sortBedroom(size) {
  if (size.target.value === 'all') {
    return loadData(arr)
    }

  let bedArr = arr.filter((x) => {
    return x.bedrooms <= size.target.value;
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

// footer & copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="container">
  <div class="row w-100">
      <div class="col-12 d-flex justify-content-between">
      <p><i class="fa-solid fa-location-dot"></i> Property 420</p>
        
        <i>&copyAbdus-Samad Charles ${Year}</i>
        <div>
          <a href="" class="mx-1">
          <i class="fa-brands fa-github">
              GitHub
          </i>
          </a>
          <a href="" class="mx-1">
          <i class="fa-brands fa-linkedin">
              LinkedIn
          </i>
          </a>
        </div>
      </div>   
    </div> 
  </div>
</div>
`;