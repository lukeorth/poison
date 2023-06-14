const btn = document.querySelector(".btn-light-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const themeFromLS = localStorage.getItem("theme")
const themeFromHugo = document.body.classList.contains("dark-theme") ? "dark" : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    moon.style.display = 'none';
    sun.style.display = 'block';
} else {
    document.body.classList.remove("dark-theme");
    moon.style.display = 'block';
    sun.style.display = 'none';
}

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    let hasComments = document.getElementById("remark42");
    let theme = "light";

    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
        moon.style.display = 'none';
        sun.style.display = 'block';
        if (hasComments) {
            window.REMARK42.changeTheme("dark");
        }
    } else {
        moon.style.display = 'block';
        sun.style.display = 'none';
        if (hasComments) {
            window.REMARK42.changeTheme("light");
        }
    }
    localStorage.setItem("theme", theme);
});
