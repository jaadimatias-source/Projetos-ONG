/* ==========================================
   MENU HAMBÚRGUER
   ========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("ativo");

            const menuAberto =
                navMenu.classList.contains("ativo");

            menuToggle.setAttribute(
                "aria-expanded",
                menuAberto
            );

        }
    );

}



/* ==========================================
   MODAL
   ========================================== */

const modal =
    document.getElementById("modal");

const abrirModal =
    document.getElementById("abrirModal");

const abrirModalDemo =
    document.getElementById("abrirModalDemo");

const fecharModal =
    document.getElementById("fecharModal");


function mostrarModal() {

    if (modal) {

        modal.classList.add("ativo");

    }

}


function esconderModal() {

    if (modal) {

        modal.classList.remove("ativo");

    }

}


if (abrirModal) {

    abrirModal.addEventListener(
        "click",
        mostrarModal
    );

}


if (abrirModalDemo) {

    abrirModalDemo.addEventListener(
        "click",
        mostrarModal
    );

}


if (fecharModal) {

    fecharModal.addEventListener(
        "click",
        esconderModal
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {

                esconderModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            esconderModal();

        }

    }
);



/* ==========================================
   TOAST DO INDEX
   ========================================== */

const toast =
    document.getElementById("toast");

const mostrarToast =
    document.getElementById("mostrarToast");

const mostrarToastDemo =
    document.getElementById("mostrarToastDemo");


let temporizadorToast;


function exibirToast() {

    if (!toast) {

        return;

    }


    clearTimeout(temporizadorToast);


    toast.classList.add("ativo");


    temporizadorToast =
        setTimeout(
            function () {

                toast.classList.remove("ativo");

            },
            3000
        );

}


if (mostrarToast) {

    mostrarToast.addEventListener(
        "click",
        exibirToast
    );

}


if (mostrarToastDemo) {

    mostrarToastDemo.addEventListener(
        "click",
        exibirToast
    );

}



/* ==========================================
   FORMULÁRIO DE CADASTRO
   ========================================== */

const formCadastro =
    document.getElementById("formCadastro");

const nome =
    document.getElementById("nome");

const cpf =
    document.getElementById("cpf");

const email =
    document.getElementById("email");

const telefone =
    document.getElementById("telefone");

const cep =
    document.getElementById("cep");

const interesse =
    document.getElementById("interesse");

const toastCadastro =
    document.getElementById("toastCadastro");


if (formCadastro) {

    formCadastro.addEventListener(
        "submit",
        function (evento) {

            evento.preventDefault();


            let formularioValido = true;


            /* NOME */

            if (nome.value.trim().length < 3) {

                nome.classList.add("invalido");

                nome.classList.remove("valido");

                document.getElementById(
                    "erroNome"
                ).textContent =
                    "Digite seu nome completo.";

                formularioValido = false;

            } else {

                nome.classList.add("valido");

                nome.classList.remove("invalido");

                document.getElementById(
                    "erroNome"
                ).textContent = "";

            }



            /* CPF */

            if (cpf.value.trim().length < 11) {

                cpf.classList.add("invalido");

                cpf.classList.remove("valido");

                document.getElementById(
                    "erroCpf"
                ).textContent =
                    "Digite um CPF válido.";

                formularioValido = false;

            } else {

                cpf.classList.add("valido");

                cpf.classList.remove("invalido");

                document.getElementById(
                    "erroCpf"
                ).textContent = "";

            }



            /* E-MAIL */

            if (!email.validity.valid) {

                email.classList.add("invalido");

                email.classList.remove("valido");

                document.getElementById(
                    "erroEmail"
                ).textContent =
                    "Digite um e-mail válido.";

                formularioValido = false;

            } else {

                email.classList.add("valido");

                email.classList.remove("invalido");

                document.getElementById(
                    "erroEmail"
                ).textContent = "";

            }



            /* TELEFONE */

            if (telefone.value.trim().length < 10) {

                telefone.classList.add("invalido");

                telefone.classList.remove("valido");

                document.getElementById(
                    "erroTelefone"
                ).textContent =
                    "Digite um telefone válido.";

                formularioValido = false;

            } else {

                telefone.classList.add("valido");

                telefone.classList.remove("invalido");

                document.getElementById(
                    "erroTelefone"
                ).textContent = "";

            }



            /* CEP */

            if (cep.value.trim().length < 8) {

                cep.classList.add("invalido");

                cep.classList.remove("valido");

                document.getElementById(
                    "erroCep"
                ).textContent =
                    "Digite um CEP válido.";

                formularioValido = false;

            } else {

                cep.classList.add("valido");

                cep.classList.remove("invalido");

                document.getElementById(
                    "erroCep"
                ).textContent = "";

            }



            /* INTERESSE */

            if (interesse && interesse.value === "") {

                interesse.classList.add("invalido");

                interesse.classList.remove("valido");

                formularioValido = false;

            } else if (interesse) {

                interesse.classList.add("valido");

                interesse.classList.remove("invalido");

            }



            /* SUCESSO */

            if (formularioValido) {

                if (toastCadastro) {

                    toastCadastro.classList.add("ativo");


                    setTimeout(
                        function () {

                            toastCadastro
                                .classList
                                .remove("ativo");

                        },
                        3000
                    );

                }

            }

        }
    );

}



/* ==========================================
   BOTÃO LIMPAR DO FORMULÁRIO
   ========================================== */

if (formCadastro) {

    formCadastro.addEventListener(
        "reset",
        function () {

            setTimeout(
                function () {

                    const campos =
                        formCadastro.querySelectorAll(
                            "input, select, textarea"
                        );


                    campos.forEach(
                        function (campo) {

                            campo.classList.remove(
                                "valido",
                                "invalido"
                            );

                        }
                    );


                    const mensagens =
                        formCadastro.querySelectorAll(
                            ".mensagem-erro"
                        );


                    mensagens.forEach(
                        function (mensagem) {

                            mensagem.textContent = "";

                        }
                    );

                },
                0
            );

        }
    );

}