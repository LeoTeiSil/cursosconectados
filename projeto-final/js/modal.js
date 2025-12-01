const modal = document.getElementById("modal-selecao");
const textoModal = document.getElementById("modal-texto");

const btnEntrar = document.querySelector(".btn-entrar");
const btnCadastro = document.querySelector(".btn-cadastro");

const fechar = document.querySelector(".modal-fechar");

const btnEstudante = document.getElementById("btn-estudante");
const btnProfessor = document.getElementById("btn-professor");

let modo = ""; // entrar | cadastrar

// Abrir modal pelo botão "Entrar"
btnEntrar.addEventListener("click", () => {
    modo = "entrar";
    textoModal.textContent = "Como deseja entrar?";
    modal.style.display = "flex";
});

// Abrir modal pelo botão "Cadastrar"
btnCadastro.addEventListener("click", () => {
    modo = "cadastrar";
    textoModal.textContent = "Como deseja se cadastrar?";
    modal.style.display = "flex";
});

// Fechar modal (X)
fechar.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar clicando fora
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Botões principais
btnEstudante.addEventListener("click", () => {
    if (modo === "entrar") {
        window.location.href = "login-estudante.html";
    } else {
        window.location.href = "cadastro-estudante.html";
    }
});

btnProfessor.addEventListener("click", () => {
    if (modo === "entrar") {
        window.location.href = "login-professor.html";
    } else {
        window.location.href = "cadastro-professor.html";
    }
});
