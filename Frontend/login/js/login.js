window.addEventListener("load", handleLoad);

function handleLoad(){
    prefillEmail();

    let loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", handleSubmit);
}

async function handleSubmit(e){
    e.preventDefault();

    try{
        const url = `${ENV.API_BASE_URL}/api/Authentication/token`
        let formData = new FormData(e.target);
        let loginModel = {};

        for(let keyvalue of formData.entries()){
            loginModel[keyvalue[0]] = keyvalue[1];
        }
        console.log(loginModel);
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginModel)
        });

        if(!response.ok){
            let errorString = "";

            switch(response.status){
                case 400:
                    errorString = "Server cannot process request";
                    break;
                case 401:
                    errorString = "User not verified";
                    break;
                case 403:
                    errorString = "Acces prohibited";
                    break;
                default:
                    errorString = "An error has occured" + response.status;
            }

            showError(errorString);
            return;
        }

        let obj = await response.json();
        window.sessionStorage.setItem("user", JSON.stringify(obj.user));
        window.sessionStorage.setItem("token", obj.token);
        
        window.location.href = "../lobby/lobby.html";

    }
    catch(error){
        let errorDisplay = document.getElementById("error");
        errorDisplay.textContent = "Something went wrong. Please try again later.";
    }

}

function showError(message){
    let errorDisplay = document.getElementById("error");
        errorDisplay.textContent = message;
}

function prefillEmail(){
    let email = window.sessionStorage.getItem("prefillEmail");
    let emailInput = document.getElementById("emailUser");

    if(email) emailInput.value = email;
    window.sessionStorage.removeItem("prefillEmail");
}