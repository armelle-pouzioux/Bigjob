document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Formulaire soumis !");

    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmPasswordError = document.getElementById("confirmPasswordError");

    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    let isValid = true;

    if (!email.endsWith("@laplateforme.io")) {
        emailError.textContent ="Seuls les membres de La Plateforme_ peuvent s'inscrire.";
        isValid=false;
    }

    if (password.length < 8) {
        passwordError.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent="Les mots de passe ne correspondent pas !";
        isValid = false;
    }

    if (isValid){
        let users = JSON.parse(localStorage.getItem("users")) || [];

    
        if (users.some(user => user.email === email)) {
            emailError.textContent="Cet utilisateur existe déjà !";
            emailError.classList.add("text-danger");
            alert("Erreur : Cet utilisateur existe déjà !");
            return;
        }
    

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Inscription réussie !");
    }
});