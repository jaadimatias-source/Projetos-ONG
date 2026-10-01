// ==========================================
// ONG ESPERANÇA
// JAVASCRIPT PRINCIPAL
// ==========================================


// ==========================================
// 1. MENU RESPONSIVO
// ==========================================

const botaoMenu =
    document.getElementById("menu-toggle");

const menu =
    document.getElementById("menu-principal");


if (botaoMenu && menu) {

    botaoMenu.addEventListener(
        "click",
        function () {

            menu.classList.toggle("aberto");


            const estaAberto =
                menu.classList.contains("aberto");


            botaoMenu.setAttribute(
                "aria-expanded",
                estaAberto
            );


            if (estaAberto) {

                botaoMenu.setAttribute(
                    "aria-label",
                    "Fechar menu"
                );

            } else {

                botaoMenu.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }

        }
    );


    // Fecha o menu ao clicar em um link

    const linksMenu =
        menu.querySelectorAll("a");


    linksMenu.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menu.classList.remove("aberto");

                botaoMenu.setAttribute(
                    "aria-expanded",
                    "false"
                );

                botaoMenu.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }
        );

    });

}



// ==========================================
// 2. FORMULÁRIO
// ==========================================

const formulario =
    document.getElementById("form-cadastro");

const toast =
    document.getElementById("toast");


if (formulario) {

    formulario.addEventListener(
        "submit",
        function (evento) {

            // Impede o recarregamento da página

            evento.preventDefault();


            // Verifica as validações HTML

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;

            }


            // Mostra mensagem

            mostrarToast(
                "Cadastro realizado com sucesso!"
            );


            // Limpa o formulário

            formulario.reset();

        }
    );

}



// ==========================================
// 3. FUNÇÃO DO TOAST
// ==========================================

function mostrarToast(mensagem) {

    if (!toast) {

        return;

    }


    toast.textContent = mensagem;

    toast.classList.add("mostrar");


    setTimeout(
        function () {

            toast.classList.remove("mostrar");

        },
        3000
    );

}



// ==========================================
// 4. MÁSCARA DE CPF
// ==========================================

const campoCpf =
    document.getElementById("cpf");


if (campoCpf) {

    campoCpf.addEventListener(
        "input",
        function () {

            let valor =
                campoCpf.value.replace(
                    /\D/g,
                    ""
                );


            // Limita em 11 números

            valor =
                valor.substring(0, 11);


            // 000.000.000-00

            valor =
                valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );


            valor =
                valor.replace(
                    /(\d{3})(\d)/,
                    "$1.$2"
                );


            valor =
                valor.replace(
                    /(\d{3})(\d{1,2})$/,
                    "$1-$2"
                );


            campoCpf.value = valor;

        }
    );

}



// ==========================================
// 5. MÁSCARA DE TELEFONE
// ==========================================

const campoTelefone =
    document.getElementById("telefone");


if (campoTelefone) {

    campoTelefone.addEventListener(
        "input",
        function () {

            let valor =
                campoTelefone.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(0, 11);


            valor =
                valor.replace(
                    /^(\d{2})(\d)/,
                    "($1) $2"
                );


            valor =
                valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );


            campoTelefone.value =
                valor;

        }
    );

}



// ==========================================
// 6. MÁSCARA DE CEP
// ==========================================

const campoCep =
    document.getElementById("cep");


if (campoCep) {

    campoCep.addEventListener(
        "input",
        function () {

            let valor =
                campoCep.value.replace(
                    /\D/g,
                    ""
                );


            valor =
                valor.substring(0, 8);


            valor =
                valor.replace(
                    /^(\d{5})(\d)/,
                    "$1-$2"
                );


            campoCep.value = valor;

        }
    );

}



// ==========================================
// 7. MODAL DOS PROJETOS
// ==========================================

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fechar-modal");

const tituloModal =
    document.getElementById("modal-titulo");

const textoModal =
    document.getElementById("modal-texto");

const botoesModal =
    document.querySelectorAll(".botao-modal");


// Guarda o botão que abriu o modal
// para devolver o foco depois.

let ultimoElementoFocado = null;


if (modal) {

    botoesModal.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    ultimoElementoFocado =
                        botao;


                    const titulo =
                        botao.getAttribute(
                            "data-titulo"
                        );


                    const texto =
                        botao.getAttribute(
                            "data-texto"
                        );


                    tituloModal.textContent =
                        titulo;


                    textoModal.textContent =
                        texto;


                    modal.classList.add(
                        "aberto"
                    );


                    modal.setAttribute(
                        "aria-hidden",
                        "false"
                    );


                    // Coloca o foco no botão fechar

                    fecharModal.focus();

                }
            );

        }
    );

}



// ==========================================
// 8. FUNÇÃO PARA FECHAR MODAL
// ==========================================

function fecharJanelaModal() {

    if (!modal) {

        return;

    }


    modal.classList.remove(
        "aberto"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    // Devolve o foco para
    // o botão que abriu o modal

    if (ultimoElementoFocado) {

        ultimoElementoFocado.focus();

    }

}



// ==========================================
// 9. BOTÃO FECHAR MODAL
// ==========================================

if (fecharModal) {

    fecharModal.addEventListener(
        "click",
        fecharJanelaModal
    );

}



// ==========================================
// 10. FECHAR CLICANDO FORA
// ==========================================

if (modal) {

    modal.addEventListener(
        "click",
        function (evento) {

            if (evento.target === modal) {

                fecharJanelaModal();

            }

        }
    );

}



// ==========================================
// 11. TECLA ESC
// ==========================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Escape" &&
            modal &&
            modal.classList.contains("aberto")
        ) {

            fecharJanelaModal();

        }

    }
);