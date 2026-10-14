// Small interactions for the portfolio page.
document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current without having to edit the HTML every year.
  const yearLabel = document.querySelector("#currentYear");
  if (yearLabel) {
    yearLabel.textContent = new Date().getFullYear();
  }

  // Close the mobile menu after someone selects a section.
  const navMenu = document.querySelector("#mainNav");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  // Animate content as it scrolls into view. The page still works if GSAP is unavailable.
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".section-heading, .about-card, .fact-item, .quote-card, .skill-card, .project-card, .contact-card")
      .forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true
            }
          }
        );
      });

    gsap.from(".hero-copy > *", {
      y: 18,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.15
    });
  }
});
