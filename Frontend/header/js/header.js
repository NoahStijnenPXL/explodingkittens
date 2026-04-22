window.addEventListener("load", loadHeader);

async function loadHeader() {
    const headerElement = document.querySelector("header");

    if (!headerElement) return;

    let path = "../header/header.html";

    if(window.location.href.includes("index")) path = "./header/header.html";
    const response = await fetch(path);

    if (response.ok) {
        headerElement.innerHTML = await response.text();

        updateAccount(); // username instellen nadat header geladen is
    }
}

async function updateAccount() {
    const accountButton = document.getElementById("accountButton");
    const userData = sessionStorage.getItem("user");

    let path = "../header/header.html";
    if(window.location.href.includes("header")) path = "./header/header.html";

    let response = await fetch(path);

    if (userData) {
        const user = JSON.parse(userData);

        accountButton.textContent = user.userName;
        accountButton.href = "./profile/profile.html";
    } else {
        accountButton.textContent = "Account";
        accountButton.href = "./login/login.html";
    }
}