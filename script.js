document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  const errorElement = document.getElementById("error");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: form.first_name.value.trim(),
      lastName: form.last_name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      password: form.password.value.trim(),
    };

    errorElement.textContent = "";

    if (!validateForm(formData)) {
      return;
    }

    console.log("Form data submitted:", formData);
    form.reset();
  });

  function validateForm(data) {
    if (data.password.length < 8) {
      errorElement.textContent = "Password must be at least 8 characters long.";
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone)) {
      errorElement.textContent = "Please enter a valid 10-digit phone number.";
      return false;
    }

    if (!validateEmail(data.email)) {
      errorElement.textContent = "Please enter a valid email address.";
      return false;
    }

    return true;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
