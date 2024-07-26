document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Load theme from local storage
    if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.checked = true;
    }
  
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        body.classLis.add("dark-mode");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      }
    });
  });
  