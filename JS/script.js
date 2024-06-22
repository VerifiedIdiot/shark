function toggleMenu() {
    var menuIcon = document.getElementById("menu-icon");
    var menu = document.getElementById("menu");

    menuIcon.classList.toggle("active");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// ㅎㅎ