// Keep all behaviour in a small, focused script.
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const themeToggleButton = document.getElementById("themeToggle");

  // Read any previously chosen theme from localStorage so the page feels consistent.
  const savedTheme = window.localStorage.getItem("elevvo-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    body.setAttribute("data-theme", savedTheme);
    updateThemeToggleLabel(themeToggleButton, savedTheme);
  }

  // Attach click handler to flip between light and dark modes.
  themeToggleButton?.addEventListener("click", () => {
    const current = body.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    body.setAttribute("data-theme", next);
    window.localStorage.setItem("elevvo-theme", next);
    updateThemeToggleLabel(themeToggleButton, next);
  });

  // Helper updates the icon and label to match the active theme.
  function updateThemeToggleLabel(button, theme) {
    if (!button) return;

    const iconSpan = button.querySelector(".theme-toggle__icon");
    const labelSpan = button.querySelector(".theme-toggle__label");

    if (theme === "dark") {
      if (iconSpan) iconSpan.textContent = "🌙";
      if (labelSpan) labelSpan.textContent = "Dark";
    } else {
      if (iconSpan) iconSpan.textContent = "🌞";
      if (labelSpan) labelSpan.textContent = "Light";
    }
  }

  // Provide a small, friendly confirmation for the CTA form without a real backend.
  const ctaForm = document.querySelector(".cta__form");
  ctaForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = /** @type {HTMLInputElement | null} */ (
      document.getElementById("workEmail")
    );

    if (!emailInput) return;

    const email = emailInput.value.trim();
    if (!email) {
      alert("Please add your work email to receive the demo link.");
      return;
    }

    alert(
      `Thanks, we have reserved a demo workspace for ${email}. Check your inbox for the link.`
    );
    emailInput.value = "";
  });
});

