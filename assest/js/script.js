const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});

function check_jika_login() {


    if (login == false) {
        window.location = "login/login.html";
        login = true;
    }

}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.alert("login sukses");
        window.location.href = "../";

    }
};