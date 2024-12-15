document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    // Validation simple des identifiants (à améliorer pour une application réelle)
    if (username === "user" && password === "password") {
        message.style.color = "green";
        message.textContent = "Connexion réussie!";
    } else {
        message.style.color = "red";
        message.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
});
