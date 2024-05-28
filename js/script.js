document.addEventListener("DOMContentLoaded", function() {
  const element = document.querySelector('.typing');
  const text = 'Web Developer.';
  let index = 0;
  let isBackspacing = false;

  function type() {
    if (!isBackspacing && index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else if (index > 0) {
      element.innerHTML = text.substring(0, index - 1);
      index--;
      isBackspacing = true;
    } else {
      isBackspacing = false;
    }

    setTimeout(type, isBackspacing ? 100 :200);  // Adjust speed for typing and backspacing
  }

  type();
});
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav li a');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('click', function(event) {
      // Remove 'navactive' class from all links
      navLinks.forEach(function(link) {
        link.classList.remove('navactive');
      });

      // Add 'navactive' class to the clicked link
      event.target.classList.add('navactive');
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.contact .contact-info-item .icon');
  icons.forEach(icon => {
      icon.addEventListener('click', function() {
          icon.classList.toggle('active');
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("navactive");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("navactive");
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // Remove the 'visible' class when the element is not in view
      }
    });
  }, { threshold: 0 });

  document.querySelectorAll('.fade-in').forEach((element) => {
    observer.observe(element);
  });
});

