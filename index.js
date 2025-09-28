// index.js - Portfolio Page Logic

// Sample portfolio data
const projects = [
    {
        title: "Personal Website",
        description: "A responsive personal website built with HTML, CSS, and JavaScript.",
        link: "https://yourwebsite.com",
        image: "images/personal-website.png"
    },
    {
        title: "E-commerce Store",
        description: "An online store with shopping cart functionality using React and Node.js.",
        link: "https://mystore.com",
        image: "images/ecommerce-store.png"
    },
    {
        title: "Blog Platform",
        description: "A full-stack blog platform with user authentication and CRUD features.",
        link: "https://myblog.com",
        image: "images/blog-platform.png"
    }
];

// Function to render portfolio projects
function renderProjects() {
    const portfolioSection = document.getElementById('portfolio');
    if (!portfolioSection) return;

    portfolioSection.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image" />
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    `).join('');
}

// Navigation scroll behavior
function setupNavigation() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupNavigation();
});