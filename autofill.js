// Get references to the menu elements
const menuToggle = document.getElementById('menu-toggle');
const overlayMenu = document.getElementById('overlay-menu');
const overlayClose = document.getElementById('overlay-close');

// Add click event listener to the menu toggle button
menuToggle.addEventListener('click', toggleMenu);

// Add click event listener to the overlay close button
overlayClose.addEventListener('click', toggleMenu);

// Function to toggle the menu open and closed
function toggleMenu() {
  document.body.classList.toggle('menu-open');
}


// List of video URLs
const videoUrls = [
  'https://www.youtube.com/embed/EN1SJT76JoY',
  'https://www.youtube.com/embed/YBHQbu5rbdQ?si=-uN8rdpuzBBLdvTo',
  'https://www.youtube.com/embed/9_WBQISVHnw?si=Fu1grCdXDqoXbMNM',

  'https://www.youtube.com/embed/1w7OgIMMRc4?si=riIcisI5B05xxPAZ',
  'https://www.youtube.com/embed/_UR-l3QI2nE?si=h1yY-NSNq5jUprZm',
  'https://www.youtube.com/embed/rPe4yziWiOg?si=jDma_xI5lNjcIi3X',

  'https://www.youtube.com/embed/1VRsNiX0b94?si=QGfUaiV1ApwtJlJf',
  'https://www.youtube.com/embed/kTJczUoc26U?si=BwOozpm13Mr3o5mH',
  'https://www.youtube.com/embed/6qBTWBd7TGM?si=tTdPzedUrwJXIUFJ',

  // Add more video URLs as needed
];

// Function to create and populate the grid with embedded videos
function createGrid() {
  const gridContainer = document.getElementById('Vids');

  for (let i = 0; i < 9; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.id = `box-${i + 1}`;

    const iframe = document.createElement('iframe');
    iframe.src = videoUrls[i] || '#'; // Use the video URL or a placeholder if the URL doesn't exist
    iframe.width = '250'; // Set the width and height of the embedded video player
    iframe.height = '200';
    iframe.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen';

    gridItem.appendChild(iframe);
    gridContainer.appendChild(gridItem);
  }
}

// Call the function to create the grid
createGrid();
