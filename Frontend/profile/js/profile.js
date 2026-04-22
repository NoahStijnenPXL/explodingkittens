window.addEventListener("load", () => {

    const userData = sessionStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);

        document.getElementById("username").textContent = user.userName;
        document.getElementById("email").textContent = user.email;
        document.getElementById("birthdate").textContent = user.birthDate;
    }

    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", () => {
        window.sessionStorage.removeItem("user");
        window.sessionStorage.removeItem("token");
        window.location.href = "../index.html";
    });
});