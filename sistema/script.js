const formulario = document.getElementById("login-form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "red";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        mensagem.textContent = "Insira um email válido.";
        mensagem.style.color = "red";
        return;
    }

    if (senha.length < 6) {
        mensagem.textContent = "A senha deve ter pelo menos 6 caracteres.";
        mensagem.style.color = "red";
        return;
    }

    if (email === "teste@gmail.com" && senha === "123456") {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Email ou senha incorretos.";
        mensagem.style.color = "red";
    }
});