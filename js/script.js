"use strict" ;

  // JavaScript to create the typewriter effect
  function typeWriterEffect() {
    const typedElement = document.querySelector(".typed");
    const typedItems = typedElement.getAttribute("data-typed-items").split(", ");
    let currentIdx = 0;
    let currentText = "";
    let isDeleting = false;

    function type() {
      const maxDelay = 100;
      const minDelay = 30;
      const typingDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      const deletingDelay = 50;

      const currentWord = typedItems[currentIdx];
      const isWordComplete = currentText === currentWord;

      if (isDeleting) {
        currentText = currentWord.substring(0, currentText.length - 1);
      } else {
        currentText = currentWord.substring(0, currentText.length + 1);
      }

      typedElement.textContent = currentText;

      if (isWordComplete) {
        isDeleting = true;
      }

      if (!isDeleting && currentText === currentWord) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause after completing a word
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIdx = (currentIdx + 1) % typedItems.length;
        setTimeout(type, 500); // Pause after erasing a word
      } else {
        setTimeout(type, isDeleting ? deletingDelay : typingDelay);
      }
    }

    type(); // Start the typewriter effect
  }

  // Call the function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", typeWriterEffect);
  AOS.init();

  // JavaScript animation for smooth scrolling and highlighting active link
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
  // Wait for the DOM to be fully loaded before initializing AOS and other event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Initialize AOS library for animations
    AOS.init();
  
    // Get the contact form element
    const contactForm = document.getElementById("contactForm");
  
    // Add a submit event listener to the contact form
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      // Perform any validation or additional processing here
      // For this example, let's just log the form data to the console
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
  
      // Optionally, you can add code to send the form data to a server using fetch or XMLHttpRequest
      // For example:
      // fetch("/submit-form", {
      //   method: "POST",
      //   body: formData,
      // })
      // .then((response) => response.json())
      // .then((data) => console.log(data))
      // .catch((error) => console.error(error));
  
      // Clear the form fields after submission (optional)
      contactForm.reset();
    });
  });
  
