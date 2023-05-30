// Get the current URL
const currentURL = window.location.href;

// Get the links within the header
const headerLinks = document.querySelectorAll("header .nav-link");

// Function to handle link click
function handleClick(event) {
  // Remove active class from all links
  headerLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the current clicked link
  event.target.classList.add("active");
}

// Find the link that matches the current URL and set it as active
headerLinks.forEach((link) => {
  if (link.href === currentURL) {
    link.classList.add("active");
  }
});

// Attach event listener to each link
headerLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});
