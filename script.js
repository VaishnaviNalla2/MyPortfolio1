// Function to display the correct section content based on the menu click
function showContent(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Initially, the "Home" section is displayed by default
  document.addEventListener('DOMContentLoaded', () => {
    showContent('home');
  });
  