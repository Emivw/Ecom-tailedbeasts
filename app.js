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
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "House 2",
    imgURL: "https://picsum.photos/200/300?random=2",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "House 3",
    imgURL: "https://picsum.photos/200/300?random=3",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "House 4",
    imgURL: "https://picsum.photos/200/300?random=4",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "House 5",
    imgURL: "https://picsum.photos/200/300?random=5",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
  {
    title: "House 6",
    imgURL: "https://picsum.photos/200/300?random=6",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },

  {
    title: "House 7",
    imgURL: "https://picsum.photos/200/300?random=7",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },

  {
    title: "House 8",
    imgURL: "https://picsum.photos/200/300?random=8",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },


  {
    title: "House 9",
    imgURL: "https://picsum.photos/200/300?random=9",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },


  {
    title: "House 10",
    imgURL: "https://picsum.photos/200/300?random=10",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },


  {
    title: "House 11",
    imgURL: "https://picsum.photos/200/300?random=11",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },

  {
    title: "House 12",
    imgURL: "https://picsum.photos/200/300?random=12",
    description: "Lorem ipsum",
    technologies: "HTML/CSS/JS",
    links: {
      github: "Link",
      live: "Link",
    },
  },
];

const projectContainer = document.getElementById("projects");

projects.forEach((project) => {
  projectContainer.innerHTML += `
  <div class="col-md-4 staff">
         <h3>${project.title}</h3>
         <img class="img-fluid" src=${project.imgURL} />

      <div class="staff-details">
      <h2>${project.description}</h2>

      </div>
         </div>

         
  `;
});



