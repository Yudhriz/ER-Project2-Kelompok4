document.getElementById("login_btn").addEventListener("click", (e) => {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username && password) {
        if (username == "admin" && password == "admin") {
            Swal.fire({
                icon: "success",
                title: "Success Login!",
                text: "Redirecting you to the admin page.. in 3s..",
            });
            Swal.getConfirmButton(
                setTimeout(() => {
                    window.location.href = "../admin/";
                }, 3000)
            );
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your username or password is invalid check your data again.",
                footer: "<a href='register.html'>Don't have account? Register here.</a>",
            });
        }
    }
});