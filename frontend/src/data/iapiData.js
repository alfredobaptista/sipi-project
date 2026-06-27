// src/data/iapiData.js

export const sobreIAPI = {
  missao: 'Garantir a proteção da propriedade industrial em Angola, promovendo a inovação e o desenvolvimento tecnológico.',
  visao: 'Ser referência na gestão da propriedade industrial em Angola e na SADC.',
  valores: ['Integridade', 'Transparência', 'Inovação', 'Excelência', 'Eficiência'],
};

export const servicos = [
  {
    id: 'marcas',
    titulo: 'Registo de Marcas',
    descricao: 'Proteja o nome ou logótipo que identifica os seus produtos ou serviços no mercado nacional.',
    imagem: 'https://placehold.co/400x300/0A2A44/FFFFFF?text=Marca',
    link: '/servicos/marca',
  },
  {
    id: 'patentes',
    titulo: 'Registo de Patentes',
    descricao: 'Garanta a exclusividade sobre as suas invenções e inovações técnicas por 20 anos.',
    imagem: 'https://placehold.co/400x300/C8102E/FFFFFF?text=Patente',
    link: '/servicos/patente',
  },
  {
    id: 'desenhos',
    titulo: 'Desenhos Industriais',
    descricao: 'Proteja a aparência ornamental e o design dos seus produtos por 15 anos.',
    imagem: 'https://placehold.co/400x300/FFCD00/0A2A44?text=Desenho',
    link: '/servicos/desenho',
  },
];

export const noticias = [
  {
    id: 1,
    titulo: 'IAPI promove formação sobre Propriedade Industrial',
    data: '15/06/2025',
    resumo: 'O IAPI realizou uma formação para agentes económicos sobre a importância do registo de marcas e patentes.',
    imagem: 'https://placehold.co/600x400/0A2A44/FFFFFF?text=Forma%C3%A7%C3%A3o',
    link: '/noticias/1',
  },
  {
    id: 2,
    titulo: 'Angola adere à Classificação de Nice 2025',
    data: '10/06/2025',
    resumo: 'O país adoptou a nova versão da Classificação Internacional de Produtos e Serviços para o registo de marcas.',
    imagem: 'https://placehold.co/600x400/C8102E/FFFFFF?text=Nice+2025',
    link: '/noticias/2',
  },
  {
    id: 3,
    titulo: 'Prazo para renovação de marcas termina em Julho',
    data: '05/06/2025',
    resumo: 'Os titulares de marcas têm até 31 de Julho para renovar os seus registos junto ao IAPI.',
    imagem: 'https://placehold.co/600x400/FFCD00/0A2A44?text=Renova%C3%A7%C3%A3o',
    link: '/noticias/3',
  },
];

export const formularios = [
  {
    id: 'marca',
    titulo: 'Formulário de Depósito de Marca',
    descricao: 'Formulário para registo de marcas nacionais.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-marca.pdf',
    tipo: 'Depósito',
  },
  {
    id: 'patente',
    titulo: 'Formulário de Depósito de Patente',
    descricao: 'Formulário para registo de patentes de invenção.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-patente.pdf',
    tipo: 'Depósito',
  },
  {
    id: 'desenho',
    titulo: 'Formulário de Depósito de Desenho Industrial',
    descricao: 'Formulário para registo de desenhos industriais.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-desenho.pdf',
    tipo: 'Depósito',
  },
  {
    id: 'modelo',
    titulo: 'Formulário de Depósito de Modelo de Utilidade',
    descricao: 'Formulário para registo de modelos de utilidade.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-modelo.pdf',
    tipo: 'Depósito',
  },
  {
    id: 'certidao',
    titulo: 'Formulário de Pedido de Certidão',
    descricao: 'Solicitação de certidões de registo.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-certidao.pdf',
    tipo: 'Serviço',
  },
  {
    id: 'transferencia',
    titulo: 'Formulário de Transferência de Titularidade',
    descricao: 'Pedido de transferência de direitos de propriedade industrial.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-transferencia.pdf',
    tipo: 'Serviço',
  },
  {
    id: 'renovacao',
    titulo: 'Formulário de Renovação de Registo',
    descricao: 'Pedido de renovação de marcas ou outros títulos.',
    link: 'https://iapi.gov.ao/web/documentos/formulario-renovacao.pdf',
    tipo: 'Serviço',
  },
];