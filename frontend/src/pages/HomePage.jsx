import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faCheckCircle,
  faArrowRight,
  faRocket,
  faNewspaper,
  faCalendarAlt,
  faTools,
  faFilePdf,
  faDownload,
  faEye,
  faShieldAlt,
} from '@fortawesome/free-solid-svg-icons';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { sobreIAPI, servicos, noticias, formularios } from '../data/iapiData';
import iapeimg from '../assets/images/iapi.PNG';

const bandeiraAngola = 'https://flagcdn.com/w40/ao.png';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <Header />

      <main className="flex-grow" role="main" aria-label="Conteúdo principal">
        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <section
          className="relative text-white overflow-hidden bg-primary-500"
          aria-labelledby="hero-title"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="inline-flex items-center bg-secondary-500 text-primary-500 text-xs font-bold px-3 py-1 rounded-full"
                    aria-hidden="true"
                  >
                    <FontAwesomeIcon icon={faRocket} className="mr-1" /> INSTITUIÇÃO PÚBLICA
                  </span>
                  <img
                    src={bandeiraAngola}
                    alt="Bandeira de Angola"
                    className="h-6 w-auto rounded shadow"
                    aria-hidden="true"
                  />
                </div>
                <h1 id="hero-title" className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Proteja a sua{' '}
                  <span className="text-secondary-500">inovação</span>
                  {' '}em Angola
                </h1>
                <p className="mt-4 text-lg text-primary-100 max-w-lg">
                  O SIPI é a plataforma digital do IAPI para o registo de marcas, patentes e desenhos industriais.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/registro"
                    className="bg-secondary-500 hover:bg-secondary-400 text-primary-500 px-6 py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center gap-2"
                    aria-label="Iniciar pedido de registo"
                  >
                    <FontAwesomeIcon icon={faRocket} aria-hidden="true" /> Iniciar Pedido
                  </Link>
                  <Link
                    to="/consulta"
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 border border-white/30"
                    aria-label="Consultar base de marcas e patentes"
                  >
                    <FontAwesomeIcon icon={faSearch} aria-hidden="true" /> Consultar Base
                  </Link>
                </div>
              </div>

              <div className="hidden md:block" aria-hidden="true">
                <img
                  src={iapeimg}
                  alt="IAPI - Instituto Angolano da Propriedade Industrial"
                  className="w-full max-w-md mx-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. MISSÃO, VISÃO, VALORES */}
        {/* ============================================================ */}
        <section
          className="py-16 bg-white border-b border-gray-100"
          aria-labelledby="sobre-titulo"
        >
          <h2 id="sobre-titulo" className="sr-only">Sobre o IAPI</h2>
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <FontAwesomeIcon icon={faEye} className="text-4xl text-secondary-500 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-primary-500">Missão</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{sobreIAPI.missao}</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <FontAwesomeIcon icon={faRocket} className="text-4xl text-secondary-500 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-primary-500">Visão</h3>
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{sobreIAPI.visao}</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <FontAwesomeIcon icon={faShieldAlt} className="text-4xl text-secondary-500 mb-3" aria-hidden="true" />
                <h3 className="text-xl font-bold text-primary-500">Valores</h3>
                <ul className="mt-2 text-gray-600 text-sm space-y-1">
                  {sobreIAPI.valores.map((valor) => (
                    <li key={valor} className="flex items-center justify-center gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary-500" aria-hidden="true" />
                      {valor}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. SERVIÇOS */}
        {/* ============================================================ */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="servicos-titulo"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="servicos-titulo" className="text-3xl font-bold text-primary-500">Serviços do IAPI</h2>
              <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
                Conheça os serviços oferecidos pelo IAPI para proteger a sua propriedade industrial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicos.map((servico) => (
                <div
                  key={servico.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-secondary-500 overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={servico.imagem}
                      alt={servico.titulo}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-sm font-medium">Clique para saber mais</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-primary-500">{servico.titulo}</h3>
                      <FontAwesomeIcon icon={faTools} className="text-2xl text-secondary-500" aria-hidden="true" />
                    </div>
                    <p className="text-gray-500 mt-2 text-sm">{servico.descricao}</p>
                    <Link
                      to={servico.link}
                      className="inline-flex items-center mt-4 text-primary-500 font-medium text-sm group-hover:text-secondary-500 transition"
                      aria-label={`Saber mais sobre ${servico.titulo}`}
                    >
                      Saiba mais
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. FORMULÁRIOS */}
        {/* ============================================================ */}
        <section
          className="py-16 bg-white border-b border-gray-100"
          aria-labelledby="formularios-titulo"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 id="formularios-titulo" className="text-2xl font-bold text-primary-500 flex items-center gap-2">
                <FontAwesomeIcon icon={faFilePdf} aria-hidden="true" /> Formulários Oficiais
              </h2>
              <Link
                to="/formularios"
                className="text-primary-500 hover:underline text-sm font-medium flex items-center gap-1"
                aria-label="Ver todos os formulários"
              >
                Ver todos <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              {formularios.slice(0, 4).map((form) => (
                <div
                  key={form.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition hover:border-secondary-500"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FontAwesomeIcon icon={faFilePdf} className="text-danger text-xl" aria-hidden="true" />
                    <h3 className="font-semibold text-gray-800 text-sm">{form.titulo}</h3>
                  </div>
                  <p className="text-xs text-gray-500">{form.descricao}</p>
                  <a
                    href={form.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-primary-500 hover:text-secondary-500 text-sm font-medium transition"
                    aria-label={`Descarregar ${form.titulo} (PDF)`}
                  >
                    <FontAwesomeIcon icon={faDownload} aria-hidden="true" /> Download PDF
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. NOTÍCIAS */}
        {/* ============================================================ */}
        <section
          className="py-16 bg-gray-50"
          aria-labelledby="noticias-titulo"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 id="noticias-titulo" className="text-2xl font-bold text-primary-500 flex items-center gap-2">
                <FontAwesomeIcon icon={faNewspaper} aria-hidden="true" /> Últimas Notícias
              </h2>
              <Link
                to="/noticias"
                className="text-primary-500 hover:underline text-sm font-medium flex items-center gap-1"
                aria-label="Ver todas as notícias"
              >
                Ver todas <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {noticias.map((noticia) => (
                <div
                  key={noticia.id}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-secondary-500"
                >
                  <img
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    className="w-full h-48 object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-400 mb-2">
                      <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 text-secondary-500" aria-hidden="true" />
                      <time dateTime={noticia.data}>{noticia.data}</time>
                    </div>
                    <h3 className="font-semibold text-gray-800 line-clamp-2">{noticia.titulo}</h3>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">{noticia.resumo}</p>
                    <Link
                      to={noticia.link}
                      className="inline-flex items-center mt-4 text-primary-500 hover:text-secondary-500 transition text-sm font-medium"
                      aria-label={`Ler mais sobre ${noticia.titulo}`}
                    >
                      Ler mais
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. CTA FINAL */}
        {/* ============================================================ */}
        <section
          className="bg-gradient-to-br from-primary-500 to-primary-700 py-16 relative overflow-hidden"
          aria-labelledby="cta-titulo"
        >
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="angola-fabric-cta" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#FFCD00" strokeWidth="1.5" />
                <path d="M20 20 L60 20 L60 60 L20 60 Z" fill="none" stroke="#C8102E" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#angola-fabric-cta)" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto text-center px-4 relative">
            <img
              src={bandeiraAngola}
              alt="Bandeira de Angola"
              className="h-16 w-auto mx-auto mb-6 shadow-lg rounded"
              aria-hidden="true"
            />
            <h2 id="cta-titulo" className="text-3xl md:text-4xl font-bold text-white">
              Pronto para proteger a sua inovação?
            </h2>
            <p className="mt-4 text-primary-100 text-lg max-w-2xl mx-auto">
              Registe a sua marca, patente ou desenho industrial directamente no SIPI.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/registro"
                className="bg-secondary-500 hover:bg-secondary-400 text-primary-500 px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center gap-2 text-lg"
                aria-label="Iniciar pedido de registo"
              >
                <FontAwesomeIcon icon={faRocket} aria-hidden="true" /> Iniciar Pedido
              </Link>
              <Link
                to="/consulta"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold transition border border-white/30 flex items-center gap-2 text-lg"
                aria-label="Explorar base de dados"
              >
                <FontAwesomeIcon icon={faSearch} aria-hidden="true" /> Explorar Base
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}