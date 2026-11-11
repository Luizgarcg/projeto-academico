// ===== 1. Lista de notícias e reviews (fictícias) =====
const publicacoes = [
  { aba: "noticias", categoria: "PC", icone: "🖥️", data: "10 nov 2026",
    titulo: "Mundo aberto Aetherfall ganha data de lançamento",
    resumo: "O estúdio Nova Forge confirmou a estreia para março e mostrou um novo trailer.",
    texto: "A Nova Forge anunciou que Aetherfall, seu RPG de mundo aberto, chega ao PC em março. O novo trailer mostra ilhas flutuantes, combate com magia e um sistema de clima que muda a forma de explorar o mapa. Segundo a diretora do projeto, o jogo terá mais de 80 horas de campanha." },
  { aba: "noticias", categoria: "PC", icone: "⚔️", data: "9 nov 2026",
    titulo: "Patch gigante chega ao estratégia Iron Legions",
    resumo: "Novas unidades, mapas e ajustes de equilíbrio entram no ar nesta semana.",
    texto: "Iron Legions recebeu sua maior atualização até agora. O patch adiciona quatro unidades, dois mapas e um modo cooperativo contra a IA. Os jogadores também ganharam um novo sistema de replays, que permite rever partidas inteiras e compartilhar os melhores momentos." },
  { aba: "noticias", categoria: "Console", icone: "🎮", data: "8 nov 2026",
    titulo: "Assinatura Play Club libera três jogos grátis",
    resumo: "Assinantes já podem resgatar os títulos do mês sem custo extra.",
    texto: "O serviço Play Club divulgou os jogos do mês: um plataforma de aventura, um jogo de tiro em equipe e um simulador de culinária. Os títulos ficam disponíveis por 30 dias e, depois de resgatados, permanecem na biblioteca enquanto a assinatura estiver ativa." },
  { aba: "noticias", categoria: "Console", icone: "🏎️", data: "7 nov 2026",
    titulo: "Turbo Circuit anuncia modo cooperativo em equipes",
    resumo: "Amigos poderão disputar campeonatos juntos na mesma pista.",
    texto: "A desenvolvedora de Turbo Circuit revelou que o próximo update trará corridas em equipes de até quatro pilotos. Os pontos de cada jogador serão somados no campeonato, e haverá novos carros personalizáveis. A estreia do modo está prevista para o fim do mês." },
  { aba: "noticias", categoria: "Mobile", icone: "📱", data: "6 nov 2026",
    titulo: "Aventura Pocket Realms chega ao celular com cross-play",
    resumo: "O progresso poderá ser continuado entre aparelhos diferentes.",
    texto: "Pocket Realms, sucesso entre os jogos de aventura, finalmente ganhou versão mobile. Com cross-play, quem começa no console pode continuar no celular usando a mesma conta. Os controles foram refeitos para a tela de toque e há suporte para controle bluetooth." },
  { aba: "noticias", categoria: "Mobile", icone: "🧩", data: "5 nov 2026",
    titulo: "Puzzle brasileiro Cubo Mágico Zen explode nas lojas",
    resumo: "Estúdio independente comemora um milhão de downloads em uma semana.",
    texto: "Criado por um pequeno estúdio de Recife, Cubo Mágico Zen conquistou jogadores com fases curtas e visual relaxante. A equipe afirma que o sucesso foi inesperado e já planeja novas fases e um modo desafio diário para os próximos meses." },
  { aba: "reviews", categoria: "PC", icone: "🧙", data: "10 nov 2026",
    titulo: "Review: Eldoria Chronicles prende do início ao fim",
    resumo: "História forte e trilha marcante, com alguns bugs. Nota 8,5.",
    texto: "Eldoria Chronicles entrega uma aventura de fantasia com personagens carismáticos e escolhas que realmente mudam o rumo da história. A trilha sonora é um destaque. Por outro lado, a versão de lançamento tem bugs de colisão e quedas de desempenho em algumas áreas. Nota final: 8,5." },
  { aba: "reviews", categoria: "PC", icone: "🚀", data: "8 nov 2026",
    titulo: "Review: Orbit Command impressiona nos detalhes",
    resumo: "Gráficos lindos e controles precisos, mas curva de aprendizado alta. Nota 8,0.",
    texto: "Orbit Command é um simulador espacial para quem gosta de desafio. As naves têm física realista e as batalhas em gravidade zero são emocionantes. Os tutoriais, porém, explicam pouco, e iniciantes podem sofrer nas primeiras horas. Nota final: 8,0." },
  { aba: "reviews", categoria: "Console", icone: "👊", data: "9 nov 2026",
    titulo: "Review: Street Fury X tem elenco variado e online estável",
    resumo: "Combate fluido e modo história divertido. Nota 9,0.",
    texto: "Street Fury X acerta na combinação de lutadores únicos, golpes fáceis de aprender e difíceis de dominar. O modo online roda muito bem, mesmo em partidas com conexão mais lenta. O modo história é curto, mas divertido. Nota final: 9,0." },
  { aba: "reviews", categoria: "Console", icone: "🕹️", data: "6 nov 2026",
    titulo: "Review: Jump Hero Remastered capricha no visual",
    resumo: "Plataforma clássica volta com gráficos renovados. Nota 8,8.",
    texto: "A remasterização de Jump Hero mantém a diversão original, mas com cores vibrantes, controles mais responsivos e novas fases secretas. Quem jogou o clássico vai se emocionar; quem nunca jogou encontra uma ótima porta de entrada. Nota final: 8,8." },
  { aba: "reviews", categoria: "Mobile", icone: "🃏", data: "7 nov 2026",
    titulo: "Review: Card Arena é viciante e justo",
    resumo: "Partidas rápidas e boas recompensas diárias. Nota 7,9.",
    texto: "Card Arena traz partidas de cinco minutos, ideais para jogar no ônibus ou no intervalo. As recompensas diárias são generosas e dá para montar bons decks sem gastar. O único ponto negativo é o excesso de anúncios entre as partidas. Nota final: 7,9." },
  { aba: "reviews", categoria: "Mobile", icone: "🌱", data: "5 nov 2026",
    titulo: "Review: Little Farm Days relaxa e entretém",
    resumo: "Simples e charmoso, ideal para jogar aos poucos. Nota 7,5.",
    texto: "Little Farm Days é um simulador de fazenda sem pressa: plante, colha, decore e converse com os vizinhos. Falta variedade nas missões depois de algumas horas, mas o visual acolhedor compensa. Nota final: 7,5." }
];

// ===== 2. Variáveis que guardam o que está selecionado =====
let abaAtual = "noticias";
let categoriaAtual = "todas";

// ===== 3. Pegando os elementos do HTML (DOM) =====
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const janela = document.getElementById("janela");
const botaoFechar = document.getElementById("fechar");

const abaNoticias = document.getElementById("abaNoticias");
const abaReviews = document.getElementById("abaReviews");

const catTodas = document.getElementById("catTodas");
const catPC = document.getElementById("catPC");
const catConsole = document.getElementById("catConsole");
const catMobile = document.getElementById("catMobile");

// ===== 4. Função que mostra os cartões na tela =====
function mostrarPublicacoes() {
  let html = "";
  let total = 0;

  for (let i = 0; i < publicacoes.length; i++) {
    const post = publicacoes[i];

    // só mostra se a aba e a categoria combinam
    if (post.aba === abaAtual && (categoriaAtual === "todas" || post.categoria === categoriaAtual)) {
      html = html +
        '<article class="cartao" onclick="abrirPost(' + i + ')">' +
          '<div class="icone">' + post.icone + '</div>' +
          '<span class="etiqueta">' + post.categoria + '</span>' +
          '<h3>' + post.titulo + '</h3>' +
          '<p>' + post.resumo + '</p>' +
        '</article>';
      total = total + 1;
    }
  }

  lista.innerHTML = html;
  contador.textContent = total + " publicação(ões) encontrada(s)";
}

// ===== 5. Funções da janela da notícia =====
function abrirPost(numero) {
  const post = publicacoes[numero];

  document.getElementById("j-etiqueta").textContent = post.categoria;
  document.getElementById("j-titulo").textContent = post.titulo;
  document.getElementById("j-data").textContent = post.data;
  document.getElementById("j-texto").textContent = post.texto;

  janela.classList.remove("escondido");
}

function fecharPost() {
  janela.classList.add("escondido");
}

// ===== 6. Funções para trocar de aba e de categoria =====
function trocarAba(nome, botao) {
  abaAtual = nome;

  abaNoticias.classList.remove("ativo");
  abaReviews.classList.remove("ativo");
  botao.classList.add("ativo");

  mostrarPublicacoes();
}

function trocarCategoria(nome, botao) {
  categoriaAtual = nome;

  catTodas.classList.remove("ativo");
  catPC.classList.remove("ativo");
  catConsole.classList.remove("ativo");
  catMobile.classList.remove("ativo");
  botao.classList.add("ativo");

  mostrarPublicacoes();
}

// ===== 7. Eventos de clique =====
abaNoticias.addEventListener("click", function () {
  trocarAba("noticias", abaNoticias);
});
abaReviews.addEventListener("click", function () {
  trocarAba("reviews", abaReviews);
});

catTodas.addEventListener("click", function () {
  trocarCategoria("todas", catTodas);
});
catPC.addEventListener("click", function () {
  trocarCategoria("PC", catPC);
});
catConsole.addEventListener("click", function () {
  trocarCategoria("Console", catConsole);
});
catMobile.addEventListener("click", function () {
  trocarCategoria("Mobile", catMobile);
});

botaoFechar.addEventListener("click", fecharPost);

// fecha também ao clicar fora da caixa branca
janela.addEventListener("click", function (evento) {
  if (evento.target === janela) {
    fecharPost();
  }
});

// ===== 8. Mostra tudo quando a página abre =====
mostrarPublicacoes();
