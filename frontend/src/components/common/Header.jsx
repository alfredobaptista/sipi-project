import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faMagnifyingGlass,
  faArrowRightToBracket,
  faUserPlus,
  faHouse,
  faClipboardList,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';

const LOGO_IAPI = 'https://c2a.portais.gov.ao/uploads/iapi_df03906d75.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lista de itens principais
  const mainNavItems = [
    { to: '/', label: 'Início', icon: faHouse, end: true },
    { to: '/servicos', label: 'Serviços', icon: faClipboardList },
    { to: '/consulta', label: 'Consulta', icon: faMagnifyingGlass },
    { to: '/formularios', label: 'Formulários', icon: faFileLines },
  ];

  const authItems = [
    { to: '/login', label: 'Entrar', icon: faArrowRightToBracket },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 flex-shrink-0"
            aria-label="SIPI - Página inicial"
          >
            <img
              src={LOGO_IAPI}
              alt="IAPI - Instituto Angolano da Propriedade Industrial"
              className="h-10 w-auto md:h-12"
            />
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden md:flex items-center space-x-1"
            role="navigation"
            aria-label="Navegação principal"
          >
            {/* Itens principais */}
            {mainNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-md scale-105'
                      : 'text-gray-800 hover:bg-primary-100 hover:text-primary-700 hover:scale-105'
                  }`
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" aria-hidden="true" />
                {item.label}
              </NavLink>
            ))}

            {/* Separador vertical */}
            <span className="h-6 w-px bg-gray-300 mx-1" aria-hidden="true" />

            {/* Itens de autenticação */}
            {authItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-500 text-white shadow-md scale-105'
                      : 'text-gray-800 hover:bg-primary-100 hover:text-primary-700 hover:scale-105'
                  }`
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-2" aria-hidden="true" />
                {item.label}
              </NavLink>
            ))}

            {/* Botão Registrar (destacado) */}
            <Link
              to="/registro"
              className="flex items-center gap-2 bg-secondary-500 text-primary-500 hover:bg-secondary-400 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-xl hover:scale-105 ml-1"
              aria-label="Registar nova conta"
            >
              <FontAwesomeIcon icon={faUserPlus} aria-hidden="true" />
              Registrar
            </Link>
          </nav>

          {/* Menu mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-800 hover:text-secondary-500 focus:outline-none transition"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden py-4 border-t border-gray-200 space-y-2"
            role="menu"
            aria-label="Navegação móvel"
          >
            {mainNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-800 hover:bg-primary-100'
                  }`
                }
                role="menuitem"
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-3" aria-hidden="true" />
                {item.label}
              </NavLink>
            ))}
            {authItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-800 hover:bg-primary-100'
                  }`
                }
                role="menuitem"
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                <FontAwesomeIcon icon={item.icon} className="mr-3" aria-hidden="true" />
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/registro"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center mt-2 bg-secondary-500 text-primary-500 hover:bg-secondary-400 px-4 py-3 rounded-lg text-sm font-semibold transition"
              role="menuitem"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" aria-hidden="true" />
              Registrar
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}