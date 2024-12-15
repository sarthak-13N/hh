// Array of project data
const projects = [
  {
    id: 1,
    title: "2BHK Luxury Apartment",
    details: "A modern luxury apartment with stunning interiors and spacious living.",
    photos: [
      "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
      "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     
    ],
    videos: ["https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC","https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC",], // YouTube embed link
  },
  {
    id: 2,
    title: "3BHK luxury apartment",
    details: "A modern luxury apartment with stunning interiors and spacious living.",
    photos: [
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     
    ],
    videos: ["https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC","https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC",], // YouTube embed link
  },
  {
    id: 3,
    title: "2.5BHK luxury apartment",
    details: "A modern luxury apartment with stunning interiors and spacious living.",
    photos: [
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     "https://github.com/sarthak-13N/vm-interior-images/blob/main/main.jpeg?raw=true",
     
    ],
    videos: ["https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC","https://www.youtube.com/embed/yvNLwonaS6M?si=LnJJj4S1LzRR9bRC",], // YouTube embed link
  },
];

// Get the project ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get("id"), 10);

// Find the project with the matching ID
const project = projects.find((proj) => proj.id === projectId);

// Get the container for displaying project details
const container = document.getElementById("details-container");

// Generate HTML for project details
if (project) {
  container.innerHTML = `
    <h1>${project.title}</h1>
    <p>${project.details}</p>
    <div class="slider">
      <div class="slides">
        ${project.photos.map((photo) => `<img src="${photo}" alt="${project.title}" />`).join("")}
      </div>
      <button class="arrow left">&lt;</button>
      <button class="arrow right">&gt;</button>
    </div>
    <div class="videos">
      ${project.videos.map((video) => `<iframe src="${video}" allowfullscreen></iframe>`).join("")}
    </div>
  `;

  // Slider functionality
  const slides = document.querySelector(".slides");
  const images = project.photos;
  const totalSlides = images.length;
  let currentSlide = 0;

  // Next and Previous buttons
  const nextButton = document.querySelector(".arrow.right");
  const prevButton = document.querySelector(".arrow.left");

  // Move to the next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
  }

  // Move to the previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
  }

  // Update the slide position
  function updateSlide() {
    const slideWidth = slides.querySelector("img").clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Event listeners for buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Automatic sliding every 3 seconds
  let autoSlide = setInterval(nextSlide, 2000);

  // Pause automatic sliding on hover and resume on leave
  const slider = document.querySelector(".slider");
  slider.addEventListener("mouseover", () => clearInterval(autoSlide));
  slider.addEventListener("mouseout", () => {
    autoSlide = setInterval(nextSlide, 3000);
  });
} else {
  container.innerHTML = `<p>Project not found!</p>`;
}

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}