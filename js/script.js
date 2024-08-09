// Get references
const container = document.getElementById('main-content');
const links = document.querySelectorAll('nav a');
let url = 'partials/home.html';

// Function to load the requested partial
const loadContent = (url) => {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
            highlightActiveLink(url);
        })
        .catch(error => console.error('Error loading content:', error));
};

// Function to highlight the active link
const highlightActiveLink = (url) => {
    links.forEach(link => {
        if (link.getAttribute('href') === url) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

// Initial content load
loadContent(url);

const selectContent = (event) => {
    event.preventDefault();
    url = event.target.getAttribute('href');
    loadContent(url);
};

// Register links for click event
links.forEach(link => {
    link.addEventListener('click', selectContent);
});
