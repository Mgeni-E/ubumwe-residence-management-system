// icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

// icon toggling 
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};

// Initial theme check 

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme.matches)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  } 
  sunIcon.classList.add("display-none");
};

// manual Theme switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
  themeSwitch();
});

moonIcon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();