function showMessage() {
    alert("Email: abhinandankumardwivedi6@gmail.com 🚀");
}

const body = document.body;
const toggleBtn = document.getElementById("modeToggle");

/* Load Saved Mode */
window.onload = function () {
    let savedMode = localStorage.getItem("mode");

    if (savedMode === "light") {
        body.classList.add("light-mode");
        toggleBtn.innerHTML = "☀️ Light Mode";
    } else {
        body.classList.add("dark-mode");
        toggleBtn.innerHTML = "🌙 Dark Mode";
    }
};

/* Toggle Function */
function toggleMode() {
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
        toggleBtn.innerHTML = "☀️ Light Mode";
        localStorage.setItem("mode", "light");
    } else {
        body.classList.replace("light-mode", "dark-mode");
        toggleBtn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("mode", "dark");
    }
}