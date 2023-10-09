function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "user" && password === "password") {
        errorMessage.innerText = "";
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "submission.html";
    } else {
        errorMessage.innerText = "Invalid username or password";
    }
}

function submitForm(event) {
    event.preventDefault();

    var serialNumber = document.getElementById("serialNumber").value;
    var defectStatus = document.getElementById("defectStatus").value;
    var flaws = document.getElementById("flaws").value;
    var ram = document.getElementById("ram").value;
    var storage = document.getElementById("storage").value;

    // Here, you can handle the form data, for example, send it to a server or store it in a database.
    // For this example, let's just log the data to the console.
    console.log("Serial Number:", serialNumber);
    console.log("Defect Status:", defectStatus);
    console.log("Flaws:", flaws);
    console.log("RAM:", ram, "GB");
    console.log("Storage:", storage, "GB");

    // Redirect to the confirmation page
    window.location.href = "confirmation.html";
}


