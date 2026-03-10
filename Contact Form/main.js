// Grab the form once so we can reuse it everywhere
const form = document.getElementById("contactForm");
let successMessage = null;

// Very small email check – good enough for a simple demo form
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Show or clear an error under a single field
function setError(fieldId, message) {
  const fieldGroup = document.getElementById(fieldId).closest(".field-group");
  const errorElement = document.querySelector(
    `.error-message[data-error-for="${fieldId}"]`
  );

  if (!fieldGroup || !errorElement) return;

  if (message) {
    fieldGroup.classList.add("error");
    errorElement.textContent = message;
  } else {
    fieldGroup.classList.remove("error");
    errorElement.textContent = "";
  }
}

// Run basic validation for one field by id
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  if (!input) return true;

  const value = input.value.trim();

  if (!value) {
    setError(fieldId, "This field is required");
    return false;
  }

  if (fieldId === "email" && !EMAIL_REGEX.test(value)) {
    setError(fieldId, "Please enter a valid email address");
    return false;
  }

  setError(fieldId, "");
  return true;
}

// Hide the green success text if it exists
function hideSuccessMessage() {
  if (!successMessage) return;
  successMessage.hidden = true;
}

// Lazily create and then show the success text below the form
function showSuccessMessage() {
  if (!successMessage) {
    successMessage = document.createElement("p");
    successMessage.className = "form-success";
    successMessage.textContent = "Thank you! Your message has been sent. ✅";
    form.appendChild(successMessage);
  }
  successMessage.hidden = false;
}

// Handle submit: validate first, then show success if everything looks good
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isNameValid = validateField("fullName");
  const isEmailValid = validateField("email");
  const isSubjectValid = validateField("subject");
  const isMessageValid = validateField("message");

  const isFormValid =
    isNameValid && isEmailValid && isSubjectValid && isMessageValid;

  if (!isFormValid) {
    hideSuccessMessage();
    return;
  }

  showSuccessMessage();
  form.reset();
});

// Light, realtime validation while the user is typing
["fullName", "email", "subject", "message"].forEach((id) => {
  const input = document.getElementById(id);
  if (!input) return;

  input.addEventListener("input", () => {
    validateField(id);
  });
});

