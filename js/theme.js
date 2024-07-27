function toggleTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const themeIcon = document.getElementById("theme-icon");


  if (localStorage.getItem("theme") === "dark") {
      body.classList.add("dark-mode");
      themeToggle.checked = true;
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
  }

  themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
          body.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
      } else {
          body.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
      }
  });
}

document.addEventListener("DOMContentLoaded", toggleTheme);
