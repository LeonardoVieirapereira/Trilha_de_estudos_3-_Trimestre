let currentPageIndex = 0;
const totalPages = 8;
let isAppStarted = false;

// Animação da Tela Inicial
function startApp() {
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.visibility = 'hidden';
        isAppStarted = true;
    }, 800);
}

// Troca de Páginas por Índice
function switchPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= totalPages) return;

    currentPageIndex = pageIndex;
    const pages = document.querySelectorAll('.page');
    const buttons = document.querySelectorAll('.tab-btn');

    pages.forEach((page, index) => {
        if (index === currentPageIndex) {
            page.classList.remove('active');
            void page.offsetWidth; // Força recálculo para reiniciar a animação
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    buttons.forEach((btn, index) => {
        if (index === currentPageIndex) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navegação pelas Setas do Teclado
document.addEventListener('keydown', function(event) {
    if (!isAppStarted) {
        if (event.key === 'Enter' || event.key === ' ') {
            startApp();
        }
        return;
    }

    if (event.key === 'ArrowRight') {
        if (currentPageIndex < totalPages - 1) {
            switchPage(currentPageIndex + 1);
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentPageIndex > 0) {
            switchPage(currentPageIndex - 1);
        }
    }
});

// Revelar e Ocultar Respostas dos Exercícios
function toggleAnswer(btn) {
    const answer = btn.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
        btn.textContent = "Revelar Resposta";
        btn.style.background = "linear-gradient(135deg, var(--secondary), #6366f1)";
    } else {
        answer.style.display = "block";
        btn.textContent = "Ocultar Resposta";
        btn.style.background = "#10b981";
    }
}
