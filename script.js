// Array of project data
const projects = [
    {
      id: 1,
      title: "2BHK luxury apartment",
      backgroundImage: "photos/bed4.jpeg",
      details: "An e-learning platform for modern education.",
      photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    },
    {
      id: 2,
      title: "3BHK luxury apartment",
      backgroundImage: "photos/road3.jpeg",
      details: "An e-learning platform for modern education.",
      photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    },
    {
      id: 3,
      title: "2.5BHK luxury apartment",
      backgroundImage: "photos/lv12.jpeg",
      details: "An e-learning platform for modern education.",
      photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
      videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    },
    // {
    //   id: 4,
    //   title: "2BHK luxury apartment",
    //   backgroundImage: "photos/lv8.png",
    //   details: "An e-learning platform for modern education.",
    //   photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
    //   videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    // },
    // {
    //   id: 5,
    //   title: "2BHK luxury apartment",
    //   backgroundImage: "photos/lv8.png",
    //   details: "An e-learning platform for modern education.",
    //   photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
    //   videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    // },
    // {
    //   id: 6,
    //   title: "2BHK luxury apartment",
    //   backgroundImage: "photos/lv8.png",
    //   details: "An e-learning platform for modern education.",
    //   photos: ["https://via.placeholder.com/400x200", "https://via.placeholder.com/400x300"],
    //   videos: ["https://www.youtube.com/embed/dQw4w9WgXcQ"], // YouTube embed link
    // },
  ];
  
  // Get the container
  const container = document.getElementById("card-container");
  
  // Loop through the projects array and create cards dynamically
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${project.backgroundImage})`;
  
    // Create overlay for project title
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.textContent = project.title;
  
    // Add click event to redirect to details page with project ID
    card.addEventListener("click", () => {
      window.location.href = `project-details.html?id=${project.id}`;
    });
  
    // Append the overlay to the card
    card.appendChild(overlay);
  
    // Append the card to the container
    container.appendChild(card);
  });
  

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
}


const popup = document.getElementById('popup');
const moreBtn = document.querySelector('.more-btn');
const closePopup = document.getElementById('closePopup');

moreBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});