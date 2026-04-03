// função auxiliar para retornar true quando a tela for menor que 980px

function isMobile() {
    return window.innerWidth <= 980;
};

//==========
// MENU LATERAL
//==========

//TRAZENDO O MENU LATERAL
const sidebar = document.getElementById("sidebar");

//SELECIONANDO A ÁREA PRINCIPAL DO CONTEÚDO
const content = document.getElementById("content");

//SELECIONANDO O BOTÃO QUE ABRE O MENU LATERAL
const menuToggleBtn = document.getElementById("menuToggleBtn");

//SELECIONANDO O BOTÃO DE FECHAR QUE ABRE PARA O MOBILE
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

//TRAZ O ESCURO DO FUNDO QUANDO HÁ ABERTURA DO MENU
const overlay = document.getElementById("overlay");

//=========================================
//FUNÇÃO DE FUNCIONAMENTO DO MENU MOBILE
//=========================================

function openSidebarMobile() {
    //adicionar a classe que recebe o menu
    sidebar.classList.add("open");

    //traz o overlay (fundo escuro)
    overlay.classList.add("show");

    //Impede a rolagem enquanto o menu está aberto
    document.body.classList.add("no-scroll");
};

function closeSidebarMobile() {

    //removendo a classe que recebe o menu
    sidebar.classList.remove("open");

    //esconder o overlay 
    overlay.classList.remove("show");

    //Libera a rolagem da página
    document.body.classList.remove("no-scroll");
};

//=========================================
//FUNÇÃO DE FUNCIONAMENTO DO MENU DESKTOP
//=========================================

function toggleSidebarDesktop() {
    //o menu é recolhido ou expandido
    sidebar.classList.toggle("collapsed");

    //ajusta o conteído do site principal
    content.classList.toggle("expanded");
};

//=========================================
//CONSTRUÇÃO DA LÓGICA DE ABRIR E FECHAR
//=========================================

function handleMenuToggle() {
    if (isMobile()) {
        if (sidebar.classList.contains("open")) {
            closeSidebarMobile();
        } else {
            openSidebarMobile();
        }
    } else {
        toggleSidebarDesktop();
    };
};

//=========================================
//EVENTOS DO MENU
//=========================================

//Adicionando o evento para abertura do menu
menuToggleBtn.addEventListener("click", handleMenuToggle);

//Adicionando o evento para fechamento do menu via botão
closeSidebarBtn.addEventListener("click", closeSidebarMobile);

//Adicionando o evento do fechamento clicando no overlay
overlay.addEventListener("click", closeSidebarMobile);

//=========================================
// MODAL
//=========================================

//botao principal do topo que abre o modal geral
const openGeneralModalBtn = document.getElementById("openGeneralModalBtn");

//estrutura principal do modal
const modal = document.getElementById("modal");

//elementos internos do modal
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

//botões para fechmento do modal
const closeModalBtn = document.getElementById("closeModalBtn");
const closeModalFooterBtn = document.getElementById("closeModalFooterBtn");

//=========================================
// FUNÇÃO PRINCIPAL DO MODAL
//=========================================

function openModal(title, text) {
    modalTitle.textContent = title;
    modalText.textContent = text;

    //exibe o modal
    modal.classList.add("show");
    //trava a escrolagem da página
    document.body.classList.add("no-scroll");
};

function closeModal() {
    //fecha o modal
    modal.classList.remove("show");
    //devolve a escrolagem da página
    document.body.classList.remove("no-scroll");
};

//=========================================
// EVENTOS DO MODAL
//=========================================

openGeneralModalBtn.addEventListener("click", function () {
    openModal(
        "Projeto de revisão",
        "Esse projeto foi pensado para realizar a revisão de JavaScript com foco em interações comuns do front-end: busca, modal, carrossel, menu lateral e cards."
    );
});

closeModalBtn.addEventListener("click", closeModal);
closeModalFooterBtn.addEventListener("click", closeModal);

//=========================================
// MODAL DOS CARDS
//=========================================

const openCardModalButtons = document.querySelectorAll(".open-card-modal");

openCardModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const title = card.querySelector("h4").textContent;
        const text = card.querySelector("p").textContent;

        openModal(title, text);
    });
});

//=========================================
// BARRA DE BUSCA
//=========================================

const searchInput = document.getElementById("searchInput");
const card = document.querySelectorAll(".card");
//quando buscar algo fora, precisa mostrar para usuario que não tem nada
const emptyState = document.getElementById("emptyState");

searchInput.addEventListener("input", function () {
    //formatação do texto, tirando os espaços que usuario deixa???
    const term = searchInput.value.toLowerCase().trim();
    //variavel para saber quando os cards ficarão visiveis
    let visibleCard = 0;

    //percorrer os cards, para encontrar os títulos, transforma em minusculo para verificar o que o input esta recebendo
    card.forEach(function (cards) {
        const title = cards.querySelector("h4").textContent.toLowerCase();

        if (title.includes(term)) {
            cards.classList.remove("hidden-card"); //esconde o card
            visibleCard++;
        } else {
            cards.classList.add("hidden-card"); //senão ele vai remover, quando faza busca o outros somem
        }
    });
    //se nenhum card ficar visível
    if (visibleCard === 0) {
        emptyState.classList.add("show");
    } else {
        emptyState.classList.remove("show");
    }

});

//=========================================
// CARROSSEL DE SLIDES
//=========================================

const carouselImage = document.getElementById("carouselImage");
const carouselTitle = document.getElementById("carouselTitle");
const carouselText = document.getElementById("carouselText");
//quem controla a passada de slide
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

//links das img  no teams
//criar um objeto para cada imagem do carrossel(img/tipo/texto) p/cada img
const slides = [
    //três propriedades
    {
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
        title: "Revisão prática com Javascript",
        text: "Um exemplo simples para trabalhar com eventos, funções, arrays e manipulação de Dom.", //quebra linha> view > word wrap
    },

    {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        title: "Código que pode ser reaproveitado",
        text: "A estrutura visual e as interações podem servir de base para portfólios, dashboards e páginas institucionais",
    },

    {
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&w=1400&q=80",
        title: "Construções por etapas",
        text: "Podemos desenvolver cada recurso separadamente e depois integrar tudo no mesmo projeto",
    },
];
//variavel para armazenar a posição da array que ele estiver
let currentSlide = 0
//função que vai criar a renderizaçao dos slides, no caso as informaçoes
function renderSlide() { //identifica posição para que nesse moment ele traga a img
    const slide = slides[currentSlide]; //controla a posição

    carouselImage.src = slide.image; //vai fazer uma busca, vai receber a propriedade da img
    carouselImage.alt = slide.title;

    //substituir o titulo e o texto, dessa forma não precisa ter um html extenso
    carouselTitle.textContent = slide.title;
    carouselText.textContent = slide.text;
};

//configuração para botao de proximo/voltar
nextBtn.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }//vai fazer com que sempre fique rodando

    renderSlide();
});

prevBtn.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; //ele pega o tamanho que é 3, então esse -1 vira o numero 2, entao ele continua infinito 
    };

    renderSlide();
});

//=========================================
// FECHAR COM A TECLA ESC
//=========================================

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
        if (isMobile() && sidebar.classList.contains("open")) {
            closeSidebarMobile();
        };
    };
});

renderSlide();

//=========================================
// ACCORDEON
//=========================================
//primeiro precisa trazer os itens

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {
    //botão que dispara o conteudo da pergunta frequente
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", function () {

        faqItems.forEach(i => {
            if (i !== item) {
                i.classList.remove("active");
            };
        }); //quando abrir outra pergunta, a anterior fecha
        item.classList.toggle("active");
    });
});