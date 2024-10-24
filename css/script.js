const sidebarLinks = document.querySelectorAll('.sidebar a');
const contentPages = document.querySelectorAll('.content-page');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    const targetPageId = link.getAttribute('href');
    const targetPage = document.querySelector(targetPageId);

    // Remove active class from all content pages
    contentPages.forEach(page => page.classList.remove('active'));

    // Add active class to the clicked page
    targetPage.classList.add('active');

    // Remove active class from all sidebar links
    sidebarLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    event.target.classList.add('active');
  });
});



