// PRIMITIVES
let name = "Jason"; // String
let age = 28; // number
let isPensioner = false; // Boolean
let canDance; // Undefined
let awards = null; // Null

// Reference Types

// Object
const person = {
  name: "Jason",
  age: 28,
  isPensioner: false,
};

console.log(person);

// Array
const projects = [
  {
    title: "House 1",
    imgURL: "https://picsum.photos/200/300?random=1",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
        price: "R3500",
        status: "rent",
        size: "2m",
        favor: "&#x2665;",
      },
  },
  {
    title: "House 2",
    imgURL: "https://picsum.photos/200/300?random=2",
    technologies: "HTML/CSS/JS",
    links: {
        price: "R3000",
        status: "rent",
        size: "1m",
        favor: "&#x2665;",
      },
  },
  {
    title: "House 3",
    imgURL: "https://picsum.photos/200/300?random=3",
    description: "Lorem ipsum",
    links: {
        price: "R800000",
        status: "for sale",
        size: "3m",
        favor: "&#x2665;",
      },
  },
  {
    title: "House 4",
    imgURL: "https://picsum.photos/200/300?random=4",
    description: "Lorem ipsum",
    links: {
        price: "3000000",
        status: "for sale",
        size: "2m",
        favor: "&#x2665;",
      },
  },
  {
    title: "House 5",
    imgURL: "https://picsum.photos/200/300?random=5",
    description: "Lorem ipsum",
    links: {
        price: "R5000",
        status: "rent",
        size: "2m",
        favor: "&#x2665;",
      },
  },
  {
    title: "House 6",
    imgURL: "https://picsum.photos/200/300?random=6",
    description: "Lorem ipsum",
    links: {
        price: "R7500",
        status: "rent",
        size: "3m",
        favor: "&#x2665;",
      },
  },

  {
    title: "House 7",
    imgURL: "https://picsum.photos/200/300?random=7",
    description: "Lorem ipsum",
    links: {
        price: "R1500",
        status: "rent",
        size: "2m",
        favor: "&#x2665;",
      },
  },

  {
    title: "House 8",
    imgURL: "https://picsum.photos/200/300?random=8",
    description: "Lorem ipsum",
    links: {
        price: "567000",
        status: "for sale",
        size: "2m",
        favor: "&#x2665;",
      },
  },


  {
    title: "House 9",
    imgURL: "https://picsum.photos/200/300?random=9",
    description: "Lorem ipsum",
    links: {
        price: "R400000",
        status: "for sale",
        size: "1m",
        favor: "&#x2665;",
      },
  },


  {
    title: "House 10",
    imgURL: "https://picsum.photos/200/300?random=10",
    description: "Lorem ipsum",
    links: {
        price: "R8000000",
        status: "for sale",
        size: "3m",
        favor: "&#x2665;",
      },
  },


  {
    title: "House 11",
    imgURL: "https://picsum.photos/200/300?random=11",
    description: "Lorem ipsum",
    links: {
        price: "R5000",
        status: "rent",
        size: "1.5m",
        favor: "&#x2665;",
      },
  },

  {
    title: "House 12",
    imgURL: "https://picsum.photos/200/300?random=12",
    description: "Lorem ipsum",
    links: {
        price: "R10000",
        status: "for sale",
        size: "2m",
        favor: "&#x2665;",
      },
  },
];

const projectContainer = document.getElementById("projects");

projects.forEach((project) => {
  projectContainer.innerHTML += `
  <div class="col-md-4 staff">
         <h3>${project.title}</h3>
         <img class="img-fluid" src=${project.imgURL} />

      <div class="staff-details-favor">
      <h2>${project.links.favor}</h2>

      <div class="staff-details-status">
      <h2>${project.links.status}</h2>

      <div class="staff-details-size">
      <h2>${project.links.size}</h2>

      <div class="staff-details-price">
      <h2>${project.links.price}</h2>

      </div>
         </div>

         
  `;
});



