// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  
  // Get form values
  const form = event.target;
  const name = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const message = form.querySelector('textarea').value;
  
  // Validate form
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields');
    return;
  }
  
  // Display success message
  alert(`Thank you, ${name}! Your message has been received.\n\nI'll get back to you at ${email} as soon as possible.`);
  
  // Reset form
  form.reset();
  
  // In a real application, you would send this data to a server
  console.log({
    name: name,
    email: email,
    message: message,
    timestamp: new Date()
  });
}

// Add scroll animation to service cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.8s ease-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
  observer.observe(card);
});

// Navbar link active state
window.addEventListener('scroll', () => {
  let current = '';
  
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#00d4ff';
    } else {
      link.style.color = '#ffffff';
    }
  });
});

// Page load animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

console.log('Portfolio website loaded successfully!');
