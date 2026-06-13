

frontend/src/
├── index.js                           # ponto de entrada
├── App.js                             # componente principal (rotas)
├── App.css                            # estilos globais (ou importação do Tailwind)
│
├── assets/                            # imagens, ícones, fontes estáticas
│   ├── logo.svg
│   └── ...
│
├── components/                        # componentes reutilizáveis
│   ├── common/
│   │   ├── Header.jsx                # cabeçalho com navegação e botão de login/sair
│   │   ├── Footer.jsx
│   │   ├── Sidebar.jsx               # menu lateral (para dashboard de técnico/requerente)
│   │   ├── LoadingSpinner.jsx
│   │   ├── ErrorMessage.jsx
│   │   └── PrivateRoute.jsx          # protege rotas autenticadas
│   │
│   ├── forms/
│   │   ├── RegistroForm.jsx          # formulário de registo (pessoa física/jurídica)
│   │   ├── LoginForm.jsx
│   │   ├── PedidoForm.jsx            # formulário dinâmico para marcas/desenhos/modelos
│   │   ├── ParecerForm.jsx           # técnico emite parecer
│   │   ├── CorrecaoForm.jsx          # solicitar correção
│   │   ├── OposicaoForm.jsx          # público regista oposição
│   │   └── TransferenciaForm.jsx     # transferir titularidade
│   │
│   ├── pedidos/
│   │   ├── PedidoCard.jsx            # card para listagem de pedidos
│   │   ├── AnexoList.jsx             # lista de anexos com download
│   │   ├── HistoricoEstados.jsx      # timeline do histórico
│   │   └── StatusBadge.jsx           # badge com cor conforme estado
│   │
│   ├── tecnicos/
│   │   ├── DashboardTecnico.jsx      # tabela de pendentes
│   │   ├── AnalisePedido.jsx         # página detalhada para análise (separador Dados, Anexos, Histórico, Oposições)
│   │   └── DecisaoModal.jsx          # modal para deferir/indeferir
│   │
│   └── publicos/
│       ├── BuscaPublica.jsx          # barra de pesquisa e filtros
│       └── DetalhePublico.jsx        # detalhe público do pedido (sem dados internos)
│
├── pages/                             # páginas completas (cada rota principal)
│   ├── HomePage.jsx                  # página inicial (pode redireccionar para busca pública)
│   ├── LoginPage.jsx
│   ├── RegistroPage.jsx
│   ├── MeusPedidosPage.jsx           # lista de pedidos do requerente
│   ├── NovoPedidoPage.jsx            # formulário para criar novo pedido (marca/desenho/modelo)
│   ├── DetalhePedidoPage.jsx         # detalhe do pedido (requerente ou técnico conforme perfil)
│   ├── PerfilPage.jsx
│   ├── TransferenciaPage.jsx
│   ├── RenovacaoPage.jsx
│   ├── DashboardTecnicoPage.jsx      # rota do técnico
│   ├── AnalisePedidoPage.jsx
│   ├── BuscaPublicaPage.jsx
│   └── DetalhePublicoPage.jsx
│
├── hooks/                            # custom hooks
│   ├── useAuth.js                    # fornece login, logout, token, utilizador actual
│   ├── usePedidos.js                 # buscar lista de pedidos do requerente
│   ├── usePendentes.js               # buscar pedidos pendentes (técnico)
│   └── useDebounce.js                # para pesquisa com atraso
│
├── contexts/                         # React Context API
│   └── AuthContext.js                # estado global de autenticação
│
├── services/                         # comunicação com a API (Axios)
│   ├── api.js                        # instância do Axios (baseURL, interceptador para token)
│   ├── authService.js                # register, login, getMe, updateMe
│   ├── pedidoService.js              # criar, editar, submeter, consultar
│   ├── tecnicoService.js             # listar pendentes, analisar, parecer, decidir
│   ├── publicoService.js             # busca, detalhe público
│   ├── oposicaoService.js            # registar oposição
│   └── anexoService.js               # upload, download
│
├── utils/                            # funções auxiliares
│   ├── formatDate.js                 # formata datas
│   ├── getStatusColor.js             # mapeia estado para cor
│   ├── storage.js                    # guardar/obter token no localStorage
│   └── validators.js                 # validações customizadas (ex: NIF)
│
├── styles/                           # ficheiros CSS (se não usar Tailwind)
│   └── globals.css
│
└── routes/                           (opcional, pode definir em App.js)
    └── index.js                      # arrays de rotas para cada tipo de utilizador