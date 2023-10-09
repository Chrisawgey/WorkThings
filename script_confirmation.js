function redirectToForm() {
    window.location.href = "submission.html";
}

function logOut() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
