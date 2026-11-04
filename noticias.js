/**
 * Portal Gamer - Gerenciador Dinâmico de Notícias & Modal
 * Preenche 100% do Grid sem espaços vazios e exibe matérias completas interativamente.
 */

const bancoDeNoticias = [
  // ==================== HOME / NOTÍCIAS GERAIS ====================
  {
    id: "noticia-01",
    linkFallback: "noticia01.html",
    categoria: "Destaque",
    destaque: true,
    paginas: ["home", "noticias"],
    titulo: "Novo jogo RPG quebra recordes no lançamento mundial",
    resumo: "Com mais de 5 milhões de cópias comercializadas em apenas 48 horas, o título surpreende pela liberdade tática e gráficos de ponta.",
    imagem: "https://i.pinimg.com/736x/6e/54/f9/6e54f9bbaf2ceca84e51c6d5817602b8.jpg",
    data: "01 de Novembro de 2026",
    autor: "Redação Portal Gamer",
    texto: [
      "O aguardado lançamento de <strong>Reinos de Aethermoor</strong> finalmente aconteceu neste fim de semana e superou todas as projeções mais otimistas da indústria. Em menos de 48 horas nas prateleiras físicas e digitais, o título de RPG de ação em mundo aberto ultrapassou a impressionante marca de 5 milhões de cópias comercializadas globalmente.",
      "Desenvolvido ao longo de seis anos por uma equipe internacional de veteranos, o jogo impressiona pela riqueza de detalhes visuais e pela densidade de sua narrativa. Os jogadores assumem o papel de um andarilho dotado de magias ancestrais em meio a um continente fragmentado por disputas territoriais e monstros colossais que reagem em tempo real ao clima e ao ciclo dia-noite.",
      "Nas principais plataformas de streaming e comunidades especializadas, a recepção tem sido amplamente positiva. Críticos elogiaram a liberdade tática concedida pelo sistema de combate dinâmico, que combina esquivas precisas com feitiços elementares combinados, além da ausência quase total de telas de carregamento.",
      "Os desenvolvedores já publicaram uma mensagem oficial de agradecimento à comunidade e prometeram que o primeiro patch de estabilidade e melhorias de qualidade de vida será disponibilizado ainda nesta semana."
    ]
  },
  {
    id: "noticia-02",
    linkFallback: "noticia02.html",
    categoria: "Lançamentos",
    destaque: false,
    paginas: ["home", "noticias"],
    titulo: "Atualização traz novo mapa e personagens",
    resumo: "A nova versão traz melhorias no desempenho, combate na neve e novos operadores táticos com habilidades exclusivas.",
    imagem: "https://i.pinimg.com/736x/02/0a/38/020a38f4f1534da8dc676de71e97a04d.jpg",
    data: "28 de Outubro de 2026",
    autor: "Redação Portal Gamer",
    texto: [
      "A aguardada Temporada 4 do jogo tático de tiro em equipe <strong>Frontline Zero</strong> já está disponível em todos os servidores. O pacote de novidades inclui o mapa nevado chamado <em>Frostbite Ridge</em>, ambientado em uma base militar abandonada nas cordilheiras do norte da Europa.",
      "O novo cenário traz uma dinâmica diferenciada de combate em múltiplos níveis verticais e tempestades de neve repentinas que reduzem temporariamente a visibilidade dos atiradores de elite. Essa mecânica obriga as equipes a adotarem estratégias focadas em curto alcance e reconhecimento por drones térmicos.",
      "Além do novo território, foram integrados dois novos operadores selecionáveis: Valkyrie, especialista em suporte blindado e fortificação rápida, e Spectre, focado em interferência eletrônica de radares e mobilidade tática silenciosa."
    ]
  },
  {
    id: "noticia-03",
    linkFallback: "noticia03.html",
    categoria: "Filmes",
    destaque: false,
    paginas: ["home", "noticias"],
    titulo: "Adaptação de jogo para o cinema ganha trailer",
    resumo: "Veja as primeiras cenas, os efeitos práticos estonteantes e a data de estreia oficial nos cinemas de todo o país.",
    imagem: "https://i.pinimg.com/736x/31/ee/1a/31ee1abd11177dfe998cb250a93d87f4.jpg",
    data: "25 de Outubro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "Os fãs de ficção científica e ação receberam uma grande surpresa com a divulgação do primeiro trailer oficial da adaptação cinematográfica de <strong>Phantom Protocol</strong>. O longa-metragem é produzido em parceria direta com o estúdio criador da franquia dos jogos.",
      "A prévia de alta fidelidade visual revela efeitos práticos impressionantes mesclados a computação gráfica de ponta, destacando perseguições em metrópoles futuristas iluminadas por néon e confrontos corporais de alta intensidade.",
      "Com estreia marcada para os cinemas mundiais no segundo semestre de 2026, a produção promete não apenas honrar o lore original, mas expandir o universo da franquia para novos públicos."
    ]
  },
  {
    id: "noticia-04",
    linkFallback: "noticia04.html",
    categoria: "Hardware",
    destaque: false,
    paginas: ["home", "noticias"],
    titulo: "Nova placa de vídeo é anunciada para 2026",
    resumo: "Promessas de mais FPS, 32GB GDDR7 e suporte avançado a Path Tracing em 4K nativo para jogadores entusiastas.",
    imagem: "https://i.pinimg.com/736x/18/6c/86/186c8635dc52a3d0fa963e1671ede064.jpg",
    data: "22 de Outubro de 2026",
    autor: "Laboratório de Hardware",
    texto: [
      "Durante a conferência anual de tecnologia realizada em Taiwan, as principais fabricantes apresentaram suas novas arquiteturas gráficas para 2026. O grande destaque foi a revelação da linha <strong>Titan Forge RTX 5090</strong>, equipada com 32GB de memória GDDR7 ultraveloz e barramento PCIe 5.0.",
      "A promessa da nova microarquitetura é entregar um salto de até 65% de performance em rasterização pura e o dobro de poder computacional em iluminação por Path Tracing em tempo real.",
      "O lançamento oficial está agendado para o início do próximo ano, redefinindo o padrão de fidelidade visual nos computadores topo de linha."
    ]
  },
  {
    id: "noticia-05-geral",
    linkFallback: "noticia01.html",
    categoria: "eSports",
    destaque: false,
    paginas: ["home", "noticias"],
    titulo: "Mundial de eSports bate recorde histórico de audiência",
    resumo: "Grande final de torneio internacional ultrapassou 6 milhões de espectadores simultâneos em arenas lotadas.",
    imagem: "https://i.pinimg.com/736x/6e/54/f9/6e54f9bbaf2ceca84e51c6d5817602b8.jpg",
    data: "18 de Outubro de 2026",
    autor: "Redação Portal Gamer",
    texto: [
      "A grande final do campeonato mundial de jogos eletrônicos quebrou todos os recordes históricos do cenário competitivo mundial. Com arenas lotadas e transmissões em mais de 15 idiomas, o evento reuniu milhões de entusiastas conectados ao redor do globo.",
      "A partida decisiva foi marcada por viradas eletrizantes e jogadas memoráveis decididas no último segundo da rodada extra, levando o público ao delírio com um show pirotécnico e tecnológico sem precedentes.",
      "A organização anunciou que a próxima temporada distribuirá a maior premiação já vista no esporte eletrônico, atraindo ainda mais organizações de peso para o circuito oficial."
    ]
  },

  // ==================== FILMES ====================
  {
    id: "filme-01",
    linkFallback: "noticia05.html",
    categoria: "Destaque",
    destaque: true,
    paginas: ["filmes"],
    titulo: "Adaptação de jogo para o cinema ganha trailer oficial completo",
    resumo: "Veja as primeiras cenas épicas, o elenco confirmado de estrelas e a data de estreia nos cinemas de todo o país.",
    imagem: "https://i.pinimg.com/736x/31/ee/1a/31ee1abd11177dfe998cb250a93d87f4.jpg",
    data: "03 de Novembro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "Após anos de espera e muita especulação, o estúdio responsável liberou o aguardado trailer completo da adaptação cinematográfica mais esperada da década. O vídeo traz mais de três minutos de sequências de pura adrenalina, diálogos tensos e um vislumbre detalhado dos cenários icônicos que marcaram gerações no controle.",
      "A direção assumiu o compromisso de manter a essência da obra original, trabalhando lado a lado com os roteiristas do jogo. Além de referências sutis espalhadas em cada tomada, o filme abordará arcos narrativos inéditos.",
      "A trilha sonora conta com temas clássicos orquestrados com grandiosidade sinfônica, e a pré-venda de ingressos terá início no próximo mês em todas as principais redes de exibição."
    ]
  },
  {
    id: "filme-02",
    linkFallback: "noticia06.html",
    categoria: "Séries",
    destaque: false,
    paginas: ["filmes"],
    titulo: "Série baseada em franquia de RPG é renovada para 2ª temporada",
    resumo: "Os produtores confirmaram orçamento 40% maior, locações na Europa e a chegada de personagens lendários.",
    imagem: "https://i.pinimg.com/736x/6e/54/f9/6e54f9bbaf2ceca84e51c6d5817602b8.jpg",
    data: "30 de Outubro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "O serviço de streaming líder de audiência anunciou hoje de forma oficial a renovação de <strong>Crônicas de Aethermoor: A Série</strong> para uma segunda temporada. A confirmação vem logo após a primeira temporada atingir o topo das produções mais assistidas em mais de 80 países.",
      "A nova fase contará com filmagens em locações reais na Islândia e na Nova Zelândia, além de efeitos visuais de criaturas fantásticas desenvolvidos por estúdios premiados.",
      "Personagens adorados pelos jogadores que ainda não haviam aparecido na primeira fase da série farão suas estreias com atores em fase final de testes de caracterização."
    ]
  },
  {
    id: "filme-03",
    linkFallback: "noticia07.html",
    categoria: "Bastidores",
    destaque: false,
    paginas: ["filmes"],
    titulo: "Diretor fala sobre como levar o jogo para as telonas",
    resumo: "Ele conta o que foi mantido da história original e os segredos práticos para recriar o clima dos videogames.",
    imagem: "https://i.pinimg.com/736x/02/0a/38/020a38f4f1534da8dc676de71e97a04d.jpg",
    data: "27 de Outubro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "Em entrevista exclusiva concedida ao Portal Gamer durante a Comic Con, o cineasta responsável pelo novo blockbuster compartilhou os bastidores do processo criativo de transposição do universo interativo para a tela grande.",
      "'Em um jogo, você sente o perigo porque é o jogador segurando o controle. No cinema, precisamos transmitir essa mesma adrenalina através do enquadramento, do ritmo de montagem e da atuação crua', explicou o diretor.",
      "Ele afirmou que a equipe de dublês treinou intensamente por seis meses para executar acrobacias reais sem o uso excessivo de telas verdes ou efeitos artificiais."
    ]
  },
  {
    id: "filme-04",
    linkFallback: "noticia08.html",
    categoria: "Animação",
    destaque: false,
    paginas: ["filmes"],
    titulo: "Filme de animação de jogo clássico ganha primeiras imagens",
    resumo: "O estúdio promete fidelidade absoluta ao visual clássico em 2D/3D cel-shaded e às composições musicais originais.",
    imagem: "https://i.pinimg.com/736x/18/6c/86/186c8635dc52a3d0fa963e1671ede064.jpg",
    data: "24 de Outubro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "Um dos maiores ícones dos videogames da era dos 16-bits está oficialmente a caminho das telonas em formato de animação tradicional combinada com tecnologia 3D cel-shaded moderna. As ilustrações reveladas hoje mostram um cuidado artístico de altíssimo nível.",
      "As artes conceituais preservam as cores vibrantes do herói saltitante e seus companheiros de jornada por mundos flutuantes repletos de perigos e quebra-cabeças.",
      "A estreia está prevista para as férias de julho de 2026, com versões dubladas por grandes nomes da dublagem nacional."
    ]
  },
  {
    id: "filme-05",
    linkFallback: "noticia05.html",
    categoria: "Documentário",
    destaque: false,
    paginas: ["filmes"],
    titulo: "Documentário revela bastidores da era dourada dos videogames",
    resumo: "Série inédita traz entrevistas com criadores lendários e materiais históricos restaurados em alta definição.",
    imagem: "https://i.pinimg.com/736x/02/0a/38/020a38f4f1534da8dc676de71e97a04d.jpg",
    data: "20 de Outubro de 2026",
    autor: "Redação Cinema & Games",
    texto: [
      "Uma nova produção documental em quatro episódios mergulha nos desafios, rivalidades e inovações que moldaram a indústria de jogos eletrônicos nos anos 90.",
      "Com depoimentos inéditos de designers lendários, o documentário revela os bastidores das batalhas de marketing e as revoluções técnicas que deram vida a ícones imortais.",
      "A produção chega ao catálogo dos principais serviços de streaming ainda este mês."
    ]
  },

  // ==================== ANÁLISES ====================
  {
    id: "analise-01",
    linkFallback: "analise01.html",
    categoria: "Análise",
    destaque: true,
    nota: "9/10",
    paginas: ["analises"],
    titulo: "Análise: o RPG do ano entrega o que promete?",
    resumo: "Testamos a campanha de 70 horas, o combate dinâmico e o desempenho gráfico em múltiplos PCs.",
    imagem: "https://i.pinimg.com/736x/6e/54/f9/6e54f9bbaf2ceca84e51c6d5817602b8.jpg",
    data: "02 de Novembro de 2026",
    autor: "Equipe de Reviews Portal Gamer",
    texto: [
      "Após mais de 75 horas explorando cada recanto, castelo e masmorra, podemos cravar com segurança: o novo RPG do ano não apenas atende às monumentais expectativas do público, como estabelece novos padrões para a narrativa ambiental e a reatividade de mundos virtuais.",
      "O grande triunfo da experiência reside em sua recusa em tratar o jogador com condescendência. Você navega prestando atenção à geografia do relevo, ao som de riachos ocultos e aos rumores ouvidos nas tavernas, criando um sentimento genuíno de expedição e aventura.",
      "O sistema de combate consegue unir a precisão milimétrica de timing com árvores de habilidades profundas e ramificadas. Uma obra-prima indispensável: <strong>Nota 9/10</strong>."
    ]
  },
  {
    id: "analise-02",
    linkFallback: "analise02.html",
    categoria: "Análise",
    destaque: false,
    nota: "8/10",
    paginas: ["analises"],
    titulo: "Análise: atualização transforma o jogo de ação",
    resumo: "O novo mapa polar e o recalibre das armas corrigem os maiores problemas da versão anterior.",
    imagem: "https://i.pinimg.com/736x/02/0a/38/020a38f4f1534da8dc676de71e97a04d.jpg",
    data: "29 de Outubro de 2026",
    autor: "Equipe de Reviews Portal Gamer",
    texto: [
      "Após um período de críticas quanto ao balanceamento das armas, a mais recente atualização de <strong>Frontline Zero</strong> chega como uma verdadeira injeção de ânimo e renovação técnica.",
      "O sistema de inércia foi recalibrado e o novo mapa nevado cria duelos tensos e imprevisíveis, punindo equipes desorganizadas e recompensando formações coordenadas.",
      "Uma evolução consistente e muito bem-vinda que recebe com mérito nossa <strong>Nota 8/10</strong>."
    ]
  },
  {
    id: "analise-03",
    linkFallback: "analise03.html",
    categoria: "Hardware",
    destaque: false,
    nota: "7/10",
    paginas: ["analises"],
    titulo: "Análise: a nova placa de vídeo vale o preço?",
    resumo: "Comparamos FPS em 4K nativo, temperaturas e consumo energético com a geração anterior em bancada.",
    imagem: "https://i.pinimg.com/736x/18/6c/86/186c8635dc52a3d0fa963e1671ede064.jpg",
    data: "26 de Outubro de 2026",
    autor: "Laboratório de Hardware",
    texto: [
      "Colocamos na bancada de testes a nova topo de linha do mercado de GPUs para uma bateria intensa de benchmarks em resolução 4K com todas as configurações gráficas no ultra e traçado de raios ativado ao máximo.",
      "Os números brutos de desempenho são simplesmente estarrecedores, sustentando mais de 120 FPS estáveis com temperaturas controladas a 68°C.",
      "Entretanto, o consumo elevado e o preço exorbitante limitam o apelo apenas a entusiastas com orçamento livre: <strong>Nota 7/10</strong>."
    ]
  },
  {
    id: "analise-04",
    linkFallback: "analise04.html",
    categoria: "Análise",
    destaque: false,
    nota: "8/10",
    paginas: ["analises"],
    titulo: "Análise: aventura indie surpreende pela história",
    resumo: "Curto e poético, o título cativa com manipulação fotográfica e uma trilha sonora memorável.",
    imagem: "https://i.pinimg.com/736x/31/ee/1a/31ee1abd11177dfe998cb250a93d87f4.jpg",
    data: "23 de Outubro de 2026",
    autor: "Equipe de Reviews Portal Gamer",
    texto: [
      "Com uma duração modesta de cerca de 5 a 6 horas, <strong>Ecos do Silêncio</strong> conduz o jogador por memórias de um fotógrafo solitário em uma ilha esquecida no tempo.",
      "A mecânica principal de manipular fotos antigas para alterar o cenário tridimensional no presente funciona com brilho e originalidade invejáveis.",
      "Uma experiência rica em significado e valor artístico que merece ser jogada: <strong>Nota 8/10</strong>."
    ]
  },
  {
    id: "analise-05",
    linkFallback: "analise01.html",
    categoria: "Hardware",
    destaque: false,
    nota: "9/10",
    paginas: ["analises"],
    titulo: "Análise: headset gamer sem fio com cancelamento ativo",
    resumo: "Testamos a fidelidade sonora espacial, conforto com espuma viscoelástica e bateria de 80 horas.",
    imagem: "https://i.pinimg.com/736x/18/6c/86/186c8635dc52a3d0fa963e1671ede064.jpg",
    data: "19 de Outubro de 2026",
    autor: "Laboratório de Hardware",
    texto: [
      "O novo fone sem fio topo de linha redefine o conforto em longas sessões de jogatina com almofadas de espuma com memória e peso ultra leve.",
      "A espacialidade sonora permite identificar com clareza cristalina a direção de passos e tiros em jogos competitivos, e a bateria aguentou quase duas semanas de uso intenso.",
      "Um periférico premium que entrega tudo o que promete com excelência: <strong>Nota 9/10</strong>."
    ]
  }
];

// ==================== INICIALIZAÇÃO E RENDERIZAÇÃO ====================
document.addEventListener("DOMContentLoaded", () => {
  garantirModalNoDOM();
  identificarERenderizarPagina();
  configurarEventosGlobais();
});

/**
 * Cria a estrutura do Modal no final do body caso ainda não exista
 */
function garantirModalNoDOM() {
  if (document.getElementById("modal-noticia")) return;

  const modalHTML = `
    <div id="modal-noticia" class="modal-overlay" aria-hidden="true" role="dialog">
      <div class="modal-container">
        <button type="button" class="modal-fechar" id="btn-fechar-modal" aria-label="Fechar notícia">&times;</button>
        <img id="modal-img" src="" alt="Imagem da notícia" class="modal-imagem" />
        <div class="modal-corpo">
          <div class="modal-meta">
            <span id="modal-categoria" class="categoria">Categoria</span>
            <span id="modal-data">Data</span>
            <span id="modal-autor">Autor</span>
            <span id="modal-nota" class="nota-analise" style="display: none;">Nota</span>
          </div>
          <h2 id="modal-titulo" class="modal-titulo">Título da Notícia</h2>
          <div id="modal-texto" class="modal-texto"></div>
          <div style="margin-top: 15px; border-top: 1px solid var(--borda, #eee); padding-top: 15px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <button type="button" class="botao-ler-mais" id="btn-fechar-modal-rodape">← Fechar leitor</button>
            <a id="modal-link-pagina" href="#" class="link-menu" style="color: var(--destaque, #2BB56B); font-weight: bold; font-size: 0.95rem;">Abrir em página exclusiva →</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHTML);

  // Eventos de fechamento
  const modal = document.getElementById("modal-noticia");
  const btnFechar = document.getElementById("btn-fechar-modal");
  const btnFecharRodape = document.getElementById("btn-fechar-modal-rodape");

  btnFechar.addEventListener("click", fecharModalNoticia);
  if (btnFecharRodape) btnFecharRodape.addEventListener("click", fecharModalNoticia);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModalNoticia();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("ativo")) {
      fecharModalNoticia();
    }
  });
}

/**
 * Identifica qual página está aberta e injeta as 5 notícias correspondentes,
 * preenchendo 100% dos slots do grid (1 destaque de 2 colunas + 4 cartões normais = 3 linhas completas).
 */
function identificarERenderizarPagina() {
  const container = document.querySelector(".area-noticias");
  if (!container) return;

  const path = window.location.pathname.toLowerCase();
  let pagina = "home";

  if (container.dataset.pagina) {
    pagina = container.dataset.pagina;
  } else if (path.includes("pagina001")) {
    pagina = "noticias";
  } else if (path.includes("pagina002")) {
    pagina = "filmes";
  } else if (path.includes("pagina003")) {
    pagina = "analises";
  } else if (path.includes("index") || path.endsWith("/") || path === "") {
    pagina = "home";
  }

  const noticiasFiltradas = bancoDeNoticias.filter((n) => n.paginas.includes(pagina));

  // Renderiza as notícias no grid
  renderizarGridNoticias(container, noticiasFiltradas);

  // Também atualiza os links do sidebar 'Mais Lidas' para abrirem o modal interativo
  atualizarSidebarMaisLidas(noticiasFiltradas);
}

/**
 * Constrói o HTML dos cartões no CSS Grid
 */
function renderizarGridNoticias(container, lista) {
  if (!lista || lista.length === 0) return;

  let html = "";

  lista.forEach((item) => {
    const classeDestaque = item.destaque ? "cartao-noticia noticia-destaque" : "cartao-noticia";
    const badgeNota = item.nota ? `<span class="nota-analise" style="margin: 4px 0 8px 0; align-self: flex-start;">Nota ${item.nota}</span>` : "";

    html += `
      <article class="${classeDestaque}" data-noticia-id="${item.id}">
        <img src="${item.imagem}" alt="${item.titulo}" class="imagem-noticia" loading="lazy" />
        <div class="conteudo-noticia">
          <span class="categoria">${item.categoria}</span>
          ${item.destaque ? `<h2 class="titulo-noticia">${item.titulo}</h2>` : `<h3 class="titulo-noticia">${item.titulo}</h3>`}
          ${badgeNota}
          <p class="resumo-noticia">${item.resumo}</p>
          <button type="button" class="botao-ler-mais" data-abrir-noticia="${item.id}">
            ${item.nota ? "Ler análise" : "Ler notícia"}
          </button>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

/**
 * Conecta eventos para abrir a notícia ao clicar no botão ou no próprio cartão
 */
function configurarEventosGlobais() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-abrir-noticia]");
    if (btn) {
      e.preventDefault();
      const id = btn.getAttribute("data-abrir-noticia");
      abrirModalNoticia(id);
      return;
    }

    const card = e.target.closest(".cartao-noticia");
    // Se clicou no cartão e não foi em um link tradicional
    if (card && !e.target.closest("a") && !e.target.closest("button")) {
      const id = card.getAttribute("data-noticia-id");
      if (id) {
        abrirModalNoticia(id);
      }
    }
  });
}

/**
 * Abre a janela modal com a notícia fictícia completa
 */
function abrirModalNoticia(id) {
  const item = bancoDeNoticias.find((n) => n.id === id);
  if (!item) return;

  const modal = document.getElementById("modal-noticia");
  const img = document.getElementById("modal-img");
  const categoria = document.getElementById("modal-categoria");
  const data = document.getElementById("modal-data");
  const autor = document.getElementById("modal-autor");
  const nota = document.getElementById("modal-nota");
  const titulo = document.getElementById("modal-titulo");
  const texto = document.getElementById("modal-texto");
  const linkPagina = document.getElementById("modal-link-pagina");

  img.src = item.imagem;
  img.alt = item.titulo;
  categoria.textContent = item.categoria;
  data.textContent = item.data;
  autor.textContent = item.autor;
  titulo.textContent = item.titulo;

  if (item.nota) {
    nota.style.display = "inline-block";
    nota.textContent = `Nota ${item.nota}`;
  } else {
    nota.style.display = "none";
  }

  texto.innerHTML = item.texto.map((paragrafo) => `<p>${paragrafo}</p>`).join("");

  if (linkPagina && item.linkFallback) {
    linkPagina.href = item.linkFallback;
    linkPagina.style.display = "inline-block";
  } else if (linkPagina) {
    linkPagina.style.display = "none";
  }

  modal.classList.add("ativo");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

/**
 * Fecha a janela modal
 */
function fecharModalNoticia() {
  const modal = document.getElementById("modal-noticia");
  if (!modal) return;

  modal.classList.remove("ativo");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/**
 * Atualiza os links da barra lateral para abrirem direto no modal interativo
 */
function atualizarSidebarMaisLidas(lista) {
  const listaSidebar = document.querySelector(".lista-mais-lidas");
  if (!listaSidebar || !lista || lista.length === 0) return;

  const links = listaSidebar.querySelectorAll("a");
  links.forEach((link, index) => {
    if (lista[index]) {
      link.setAttribute("data-abrir-noticia", lista[index].id);
      link.href = "#";
    }
  });
}

