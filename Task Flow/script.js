document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year fresh without touching the HTML again
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Tiny mobile menu: toggle the main nav on small screens
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    // Close the menu once the user picks a section
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    });
  }

  // Simple intersection observer to fade sections in as we scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Start the animation a bit before the element is fully in view
      threshold: 0.18,
    }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});

