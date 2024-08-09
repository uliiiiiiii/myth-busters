// Select all paragraph elements
const paragraphs = document.querySelectorAll('p');

function handleObservations(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Visible text:', entry.target.textContent.trim());
    }
  });
};

// Set up the Intersection Observer
const observer = new IntersectionObserver(handleObservations, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
});

// Observe each paragraph
paragraphs.forEach(paragraph => {
  observer.observe(paragraph);
});
