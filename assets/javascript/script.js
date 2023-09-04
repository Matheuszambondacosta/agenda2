class User {
    constructor(name, email, birthdate, cep, telefonefixo, telefonecelular, url, cidade, instagram, github,id) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.cep = cep;
        this.telefonefixo = telefonefixo;
        this.telefonecelular = telefonecelular;
        this.url = url;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.id = this.generateId();
        this.age = this.calculateAge();
        this.zodiacSign = this.getZodiacSign();
    }

    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        console.log("Passou pelo calculateAge() da class User");
        return age;

    }
    getZodiacSign() {
        let birthdate = new Date(this.birthdate);
        let day = birthdate.getDate();
        let month = birthdate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");

        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    generateId(){
        let id = Math.floor(Math.random() * 1000000);
        return id;
    }

}

class AllUsers {
    constructor() {
        this.users = [];
        console.log("Passou pelo constructor da class AllUsers");

    }

    add(user) {
        console.log("Passou pelo add() da class AllUsers");

        if (isAnyInputEmpty()) {
            envieMsg("Preencha todos os campos");
        } 
        else if (!isURLValida(user.url)) {
            envieMsg("URL inválida", "erro")
        } else{
            this.users.push(user);
            showUsers();
            clearInputs();
        }
    }
getUserById(id){
    return this.users.find((user) => user.id == id);
}

}

const allUsers = new AllUsers();
console.log("Instanciou a class AllUsers");

function createUser() {
    console.log("Passou pela funcao createUser()");

    let nome = document.getElementById("nome").value;
    let telefonefixo = document.getElementById("telefonefixo").value;
    let telefonecelular = document.getElementById("telefonecelular").value;
    let url = document.getElementById("url").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let Github = document.getElementById("Github").value;

    let user = new User(nome,email,data,cep, telefonefixo, telefonecelular, url, cidade, instagram, Github);
    allUsers.add(user);

}

function clearInputs() {
    console.log("Passou pela funcao clearInputs()");

    document.getElementById("nome").value = "";
    document.getElementById("telefonefixo").value = "";
    document.getElementById("telefonecelular").value = "";
    document.getElementById("url").value = "";
    document.getElementById("data").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("Github").value = "";


}

function dateinPTBR(date) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}



function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}



function showUsers() {

        let html = "";
        allUsers.users.forEach((user) => {
            html += `
            <div onclick="renderList(${user.id})" class="list-eachUser">
                <img src="${user.url}" alt="Foto de perfil">
                <p><strong>Nome:</strong> ${user.name}</p>
                <p><strong>Telefone:</strong> ${formatedCellphone(user.telefonecelular)}</p>
</div>
           `;
        });
        document.getElementById("listar").innerHTML = html;
    }
 

function isAnyInputEmpty() {
    console.log("Passou pela funcao isAnyInputEmpty()");

    let name = document.getElementById("nome").value;
    let telefonefixo = document.getElementById("telefonefixo").value;
    let telefonecelular = document.getElementById("telefonecelular").value;
    let url = document.getElementById("url").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let Github = document.getElementById("Github").value;

    if (name == "" || telefonefixo == "" || telefonecelular == "" || url == "" || data == "" || email == "" || cep == "" || cidade == "" || instagram == "" || Github == "") {
        return true;
    } else {
        return false;
    }
}
function envieMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

function successMsg(msg) {
    console.log("Passou pela funcao successMsg()");
    document.getElementById("success-msg").innerHTML = msg;
    document.getElementById("success-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("success-msg").classList.add("hidden");
    }, 4000);
}

function clearInputs() {
    console.log("Passou pela funcao clearInputs()");

    document.getElementById("nome").value = "";
    document.getElementById("telefonefixo").value = "";
    document.getElementById("telefonecelular").value = "";
    document.getElementById("url").value = "";
    document.getElementById("data").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("Github").value = "";

}
function creatWhatsapplink(telefonecelular) {
    let link = "https://api.whatsapp.com/send?phone=55" + telefonecelular;
    return link;
}
function createinstagramlink(instagram) {
    let link = "https://www.instagram.com/" + instagram;
    return link;
}
function createGithublink(github) {
    let link = "https://wwww.github.com/" + github;
    return link;
}
function formatedCep(cep) {
    let cepArray = cep.split("");
    let cepFormated = cepArray[0] + cepArray[1] + cepArray[2] + cepArray[3] + cepArray[4] + "-" + cepArray[5] + cepArray[6] + cepArray[7];
    return cepFormated;
}
function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function renderList(id) {
    html = "";
   let user= allUsers.getUserById(id);
        html += `

    <div class="vap">
   <p><strong>id:</strong> ${user.id}</p> 
        <img src="${user.url}" alt="Foto de perfil">
        <p><strong>Nome:</strong> ${user.name}</p>
        <p><strong>Idade:</strong> ${user.age}</p>
        <p><strong>Signo:</strong> ${user.zodiacSign}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Data de nascimento:</strong> ${dateinPTBR(user.birthdate)}</p>
        <p><strong>Cidade:</strong> ${user.cidade}</p>
        <p><strong>Telefone celular:</strong> ${formatedCellphone(user.telefonecelular)}</p>
        <p><strong>Telefone fixo:</strong> ${formatedCellphone(user.telefonefixo)}</p>
        <p><strong>CPF:</strong> ${formatedCep(user.cep)}</p>
        <p><strong>instagram:</strong> ${user.instagram}</p>
        <p><strong>Github:</strong> ${user.github}</p>
    <div class="vap">
    <a href="${creatWhatsapplink(user.telefonecelular)}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg></a>
    <a href="${createinstagramlink(user.instagram)}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg></a>
    <a href="${createGithublink(user.github)}" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
    </div>
    </div>`;

    document.getElementById("listar2").innerHTML = html;
    console.log(id);
}