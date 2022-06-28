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
    imgURL: "https://i.postimg.cc/qvTqsKLG/buy.jpg",
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
    imgURL: "https://i.postimg.cc/DzfzDKRJ/buy1.jpg",
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
    imgURL: "https://i.postimg.cc/BvhvfVGh/buy2.jpg",
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
    imgURL: "https://i.postimg.cc/G2HmLxLb/buy3.jpg",
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
    imgURL: "https://i.postimg.cc/rm3FKRsx/buy4.jpg",
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
    imgURL: "https://i.postimg.cc/WzZprpqK/buy5.jpg",
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
    imgURL: "https://i.postimg.cc/wxRjn24V/rent.jpg",
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
    imgURL: "https://i.postimg.cc/FKK9pVJ0/rent4.jpg",
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
    imgURL: "https://i.postimg.cc/wxRjn24V/rent.jpg",
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
    imgURL: "https://i.postimg.cc/8zNkJSpK/rent2.jpg",
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
    imgURL: "https://i.postimg.cc/y8j10bWV/rent3.jpg",
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
    imgURL: "https://i.postimg.cc/m2xg490G/rent1.jpg",
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
