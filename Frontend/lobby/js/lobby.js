window.addEventListener("load", handleLoad);

function handleLoad(){
    if(!window.sessionStorage.getItem("token")){
        window.location.href = "../login/login.html";
        return;
    }
}

async function buildTable(table){
    if(!table.hasAvailableSeat){
        return;
    }

    let preferences = table.preferences;
    let users = table.seatedPlayers;
    let tableId = table.id;
    tableId = "w" //

    let tableElement = document.createElement("div");
    tableElement.classList.add("block", "table");
    tableElement.setAttribute("data-table-id", tableId);

    //

    let pElement = document.createElement("p");
    pElement.textContent = "Table id: " + tableId.substr(0, tableId.indexof("-") -1);

    tableElement.appendChild(pElement);

    //

    let button = document.createElement("button");
    button.textContent = "Copy full game ID";
    button.addEventListener("click", () => {
        let table = this.pa
    });
    
}

async function copyTableId(e){
    let id = e.target.parentElement.getAttribute("data-table-id");
    id.select();
    navigator.clipboard.write(id);
}