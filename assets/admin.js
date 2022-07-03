let properties = JSON.parse(localStorage.getItem("property")) ?
    JSON.parse(localStorage.getItem("property")) : [{
            id: 1,
            title: "Kurama",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: `./media/9tails.jpg`,
            price: 9000,
        },
        {
            id: 2,
            title: "Gyūki",
            classification: "Tailed Beast",
            species: "Ushi-oni",
            affiliation: "Allied Shinobi Forces",
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
            affiliation: "Allied Shinobi Forces",
            img: `./media/ape.jpg`,
            price: 10000,
        },
        {
            id: 10,
            title: "Desolate",
            classification: "Tailed Beast",
            species: "Kitsune",
            affiliation: "Allied Shinobi Forces",
            img: `./media/ape.jpg`,
            price: 10000,
        },
    ];
let display = document.getElementById("tbody");

function loadData() {
    display.innerHTML = "";
    properties.forEach((item, index) => {
        display.innerHTML += `
    <tr class="text-white">
    <th scope="row">${item.id}</th>
    <td>${item.title}</td>
    <td>${item.species}</td>
    <td>${item.affiliation}</td>
    <td>${item.classification}</td>
    <td>${item.price}</td>
    <!-- icons -->
    <td>
    <!-- Update -->
    <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update${index}"><i class="fa-solid fa-pen-to-square text-secondary"></i></a>
    
    <!-- Delete -->
    <a class="btn" id="delete" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can text-danger"></i></a>
    </td>
    </tr>
    <!-- Modal -->
    <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content bg-dark">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${item.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        <div class="modal-body">
        <div class="row">
        <div class="col-6">
            <!-- title -->
                <div class="mb-3">
                    <label for="editTitle${index}" class="form-label">Name</label>
                    <input class="form-control" type="text"
                    name="editTitle${index}"
                    id="editTitle${index}"
                    value="${item.title}"/>
                </div>
    
            <!-- Type -->
                <div class="mb-3">
                    <label for="editType${index}" class="form-label">Type</label>
                    <input class="form-control" type="text"
                    name="editType${index}"
                    id="editType${index}"
                    value="${item.species}"/>
                </div>
    
            <!-- affiliation -->
                <div class="mb-3">
                    <label for="editLocation${index}" class="form-label">affiliation</label>
                    <input class="form-control" type="text"
                    name="editLocation${index}"
                    id="editLocation${index}"
                    value="${item.affiliation}"/>
                </div>
    
            <!-- picture -->
                <div class="mb-3">
                    <label for="editPic${index}" class="form-label">Picture</label>
                    <input class="form-control" type="text"
                    name="editPic${index}"
                    id="editPic${index}"
                    value="${item.img}"/>
                </div>
            </div>

            <!-- price -->
                <div class="mb-3">
                    <label for="editPrice${index}" class="form-label">Price</label>
                    <input class="form-control" type="text"
                    name="editPrice${index}"
                    id="editPrice${index}"
                    value="${item.price}"/>
                </div>
            </div>
         </div> 
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" onclick="updateProperty(${index})" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    `;
    });
    console.table(properties)
}
loadData();

// Sort
function sort() {

}
document.getElementById('btnSort').addEventListener('click', sort)

// CREATE
function addItem() {
    // e.preventDefault();
    // Push to Array
    properties.push({
        id: properties.length + 1,
        title: document.getElementById('addOwner').value,
        Species: document.getElementById('addType').value,
        affiliation: document.getElementById('addRooms').value,
        classification: document.getElementById('addLocation').value,
        img: document.getElementById('addPicture').value,
        price: parseInt(document.getElementById('addPrice').value),

    });
    localStorage.setItem("property", JSON.stringify(properties));
    loadData();
}

// UPDATE
function updateProperty(id) {
    console.log("Im being clicked");
    // variables for edited values
    let especies = document.getElementById(`editType${id}`).value;
    let eaffiliation = document.getElementById(`editLocation${id}`).value;
    let etitle = document.getElementById(`editTitle${id}`).value;
    let epicture = document.getElementById(`editPic${id}`).value;
    let elenght = document.getElementById(`editRooms${id}`).value;
    let ebathrooms = document.getElementById(`editBath${id}`).value;
    let egarage = document.getElementById(`editGarage${id}`).value;
    let eprice = document.getElementById(`editPrice${id}`).value;

    // passing edited values into array
    properties[id].species = especies
    properties[id].affiliation = eaffiliation
    properties[id].Title = etitle
    properties[id].img = epicture
    properties[id].lenght = parseInt(elenght)
    properties[id].bathrooms = parseInt(ebathrooms)
    properties[id].garage = parseInt(egarage)
    properties[id].price = parseInt(eprice)
    localStorage.setItem("property", JSON.stringify(properties));
    loadData();
};

// DELETE
function deleteItem(id) {
    if (id > -1) {
        properties.splice(id, 1);
    }
    for (i = 0; i < properties.length; i++) {
        properties[i].id = i + 1;
    }
    localStorage.setItem("property", JSON.stringify(properties));
    loadData();
}
document.getElementById("delete").addEventListener("click", deleteItem);

// footer & copyright
const Year = new Date().getFullYear();
document.getElementById("footer").innerHTML += `
<div class="container">
  <div class="row w-100">
      <div class="col-12 d-flex justify-content-between">
        <p><i class="fa-solid fa-location-dot"></i> 16 Pedamy st</p>
        
        <i>&copyEmile van Wyk ${Year}</i>
        <div>
          <a href="" class="mx-1 text-black">
          <i class="fa-brands fa-github">
              GitHub
          </i>
          </a>
          <a href="" class="mx-1 text-black">
          <i class="fa-brands fa-linkedin">
              LinkedIn
          </i>
          </a>
      </div>
    </div>   
  </div> 
</div>
`;