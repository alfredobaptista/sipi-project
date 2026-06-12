com.sipi.backend
├── SipiBackendApplication.java          (classe principal, já existe)
│
├── config                                # configurações do Spring
│   ├── SecurityConfig.java               (Spring Security, desativa CSRF, define CORS, etc.)
│   ├── JwtConfig.java                    (configuração do JWT: segredo, expiração)
│   ├── CorsConfig.java                   (configuração CORS global para aceitar React)
│   └── SwaggerConfig.java                (opcional, documentação da API)
│
├── controller                             # endpoints REST
│   ├── AuthController.java               (login, registro)
│   ├── UsuarioController.java            (perfil, listagem - para admin)
│   ├── PedidoController.java             (CRUD de pedidos, rascunho, submissão, consulta)
│   ├── TecnicoController.java            (dashboard, análise, parecer, decisões)
│   ├── ConsultaPublicaController.java    (pesquisa pública, detalhe público)
│   └── OposicaoController.java           (registar oposição, listar oposições)
│
├── dto                                    # objectos de transferência de dados
│   ├── request
│   │   ├── RegistroRequest.java          (dados do formulário de registo)
│   │   ├── LoginRequest.java             (email + senha)
│   │   ├── PedidoRequest.java            (criação/edição de pedido)
│   │   ├── SubmeterPedidoRequest.java    (vazio ou com dados adicionais)
│   │   ├── ParecerRequest.java           (texto do parecer)
│   │   ├── CorrecaoRequest.java          (solicitar correção)
│   │   ├── OposicaoRequest.java          (fundamento + anexos)
│   │   └── TransferenciaRequest.java     (novo titular)
│   └── response
│       ├── JwtResponse.java              (token + tipo + id utilizador)
│       ├── UsuarioResponse.java          (dados do perfil)
│       ├── PedidoResponse.java           (resumo do pedido)
│       ├── PedidoDetalheResponse.java    (detalhe completo + histórico)
│       ├── MensagemResponse.java         (mensagens simples)
│       └── OposicaoResponse.java
│
├── exception                              # tratamento de erros
│   ├── ResourceNotFoundException.java
│   ├── BadRequestException.java
│   ├── BusinessRuleException.java
│   └── GlobalExceptionHandler.java
│
├── model                                  # entidades JPA
│   ├── Usuario.java
│   ├── Pedido.java
│   ├── Anexo.java
│   ├── HistoricoEstado.java
│   ├── Parecer.java (opcional, pode ser campo em Pedido ou tabela separada)
│   ├── Oposicao.java
│   └── TipoPropriedade.java (enum)
│
├── repository                             # interfaces JPA
│   ├── UsuarioRepository.java
│   ├── PedidoRepository.java
│   ├── AnexoRepository.java
│   ├── HistoricoEstadoRepository.java
│   └── OposicaoRepository.java
│
├── security                               # autenticação e autorização JWT
│   ├── JwtUtils.java                     (gerar, validar, extrair claims)
│   ├── JwtAuthenticationFilter.java      (filtro para cada requisição)
│   ├── UserDetailsServiceImpl.java       (carrega usuário por email)
│   └── SecurityConstants.java            (constantes: prefixo Bearer, expiration, etc.)
│
├── service                                 # lógica de negócio
│   ├── AuthService.java                  (registro, login)
│   ├── UsuarioService.java               (perfil, listagem)
│   ├── PedidoService.java                (CRUD, submissão, geração de número)
│   ├── WorkflowService.java              (máquina de estados, transições permitidas)
│   ├── ParecerService.java               (emitir parecer)
│   ├── CorrecaoService.java              (solicitar correção)
│   ├── OposicaoService.java              (registar, analisar)
│   ├── CertificadoService.java           (geração de PDF, emissão)
│   ├── CuteMockService.java              (mock do CUTE para desenvolvimento)
│   └── EmailService.java                 (notificações)
│
├── util                                   # classes auxiliares
│   ├── NumeroProcessoGenerator.java      (gera sequencial por tipo/ano)
│   ├── PdfGenerator.java                 (cria PDF da guia e certificado)
│   └── FileStorageUtil.java              (guarda anexos, limpeza)
│
└── enums                                  # enumeradores
    ├── Role.java                          (REQUERENTE, TECNICO, GESTOR)
    ├── TipoPedido.java                    (MARCA, DESENHO_INDUSTRIAL, MODELO_UTILIDADE, TRANSFERENCIA, RENOVACAO)
    ├── EstadoPedido.java                  (RASCUNHO, DEPOSITADO, PAGO, EXAME_FORMAL, PUBLICADO, EM_OPOSICAO, AGUARDA_CORRECAO, EXAME_SUBSTANTIVO, DEFERIDO, INDEFERIDO, CONCEDIDO, ARQUIVADO)
    └── TipoAnexo.java                     (LOGOTIPO, DOCUMENTO, PARECER, CERTIFICADO, etc.)