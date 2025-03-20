document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    
    let emailError = document.getElementById("loginEmailError");
    let passwordError = document.getElementById("loginPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.email === email);

    if (!user) {
        emailError.textContent = "Cet email n'est pas enregistré.";
        return;
    }

    if (user.password !== password) {
        passwordError.textContent = "Mot de passe incorrect.";
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    
    alert("Connexion réussie !");
    window.location.href = "jpo.html";
});