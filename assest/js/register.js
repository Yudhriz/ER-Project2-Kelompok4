document
    .getElementById("register_btn")
    .addEventListener("click", (e) => {
        let email = document.getElementById("email").value;
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirmPass =
            document.getElementById("confirm-password").value;
        if (username && password && confirmPass && email) {
            Swal.fire({
                icon: "success",
                title: "Success Registering Your Account!",
            });
            Swal.getConfirmButton(
                setTimeout(() => {
                    window.location.href = "login.html";
                }, 3000)
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You have to enter your data in fields!",
            });
        }
    });