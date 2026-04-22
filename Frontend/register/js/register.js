const form = document.getElementById("formRegistration");
const errorDiv = document.getElementById("errorMessage");

form.addEventListener("submit", async (e) => {e.preventDefault();
    errorDiv.textContent = "";
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const birthDate = document.getElementById("birthDate").value;

    if (password !== confirmPassword) {
        errorDiv.textContent = "Passwords do not match.";
        return;
    }

    if (password.length < 6) {
        errorDiv.textContent = "Password must be at least 6 characters.";
        return;
    }


    const today = new Date();
    const selectedDate = new Date(birthDate);

    if (selectedDate > today) {
        errorDiv.textContent = "Birthdate cannot be in the future.";
        return;
    }

    try {
        const response = await fetch(`${ENV.API_BASE_URL}/api/Authentication/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password,
                birthDate: birthDate
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            errorDiv.textContent = errorText;
            return;
        }

        window.sessionStorage.setItem("prefillEmail", email);
        window.location.href = "../../login/login.html";

    } catch (err) {
        errorDiv.textContent = "Network error. Try again later.";
    }
});