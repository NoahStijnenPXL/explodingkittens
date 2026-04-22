window.addEventListener("load", () => {

    const accountButton = document.getElementById("accountButton");

    const userData = sessionStorage.getItem("user");

    if (userData) {
        const user = JSON.parse(userData);

        accountButton.textContent = user.userName;
        accountButton.href = "profile/profile.html";
    }

    document.getElementById("playButton").addEventListener("click", () => {

    const token = sessionStorage.getItem("token");

    if (token) {
        window.location.href = "./lobby/lobby.html";
    } else {
        window.location.href = "./login/login.html";
    }

    });

    document.getElementById("playButton").addEventListener("click", () => {

        const userData = sessionStorage.getItem("user");

        if (!userData) {
            window.location.href = "./login/login.html";
            return;
        }

        window.location.href = "./lobby/lobby.html";
    });
});

