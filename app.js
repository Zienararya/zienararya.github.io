// import { themeChange } from "theme-change";

// Initialize theme-change
// themeChange();
const themeController = document.getElementById("themeController");

themeController.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "cmyk");
  }
});

document.getElementById("sendEmail").addEventListener("click", function () {
  const cc = document.getElementById("cc").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const body = document.getElementById("body").value.trim();
  const alertBox = document.getElementById("alert");
  const closeIcon = document.getElementById("close");

  // Validate that all fields are filled
  if (!cc || !subject || !body) {
    // Show custom alert
    alertBox.classList.remove("hidden");
    alertBox.querySelector("span").textContent = "Please fill in all fields before sending the message.";
    return;
  }

  if (closeIcon) {
    // Hide custom alert if it was previously shown
    alertBox.classList.add("hidden");
  }

  // Hide custom alert if it was previously shown
  alertBox.classList.add("hidden");

  // Construct the mailto link
  const mailtoLink = `mailto:kenzienararya981@gmail.com?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the mailto link
  window.location.href = mailtoLink;
});
