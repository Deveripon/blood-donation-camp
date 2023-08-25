// To showcase the demo of dark theme. Copy paste :)

document.addEventListener("DOMContentLoaded", () => {
    const toggleDark = document.getElementById("toggleDark");
    toggleDark.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");
    });
});
