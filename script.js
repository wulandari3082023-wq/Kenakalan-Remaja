function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user === "admin" && pass === "remaja123") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("loginMessage").innerText =
            "Username atau password salah!";
    }
}

function logout() {
    document.getElementById("content").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

function tampilkanDampak() {
    document.getElementById("hasil").innerText =
        "Kenakalan remaja dapat menyebabkan masalah hukum, "
        + "gangguan mental, dan masa depan yang terhambat.";
}
