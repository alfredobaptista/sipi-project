import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Coluna 1: Identidade */}
          <div>
            <span className="text-xl font-bold text-white">SIPI</span>
            <p className="mt-2 text-sm text-primary-200">
              Sistema de Informação da Propriedade Industrial – Angola.
            </p>
            <p className="mt-4 text-xs text-primary-300">
              © {new Date().getFullYear()} IAPI. Todos os direitos reservados.
            </p>
          </div>

          {/* Coluna 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition">Serviços</Link></li>
              <li><Link to="/consulta" className="hover:text-white transition">Consulta Pública</Link></li>
              <li><Link to="/login" className="hover:text-white transition">Entrar</Link></li>
              <li><Link to="/registro" className="hover:text-white transition">Registar</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Contacto institucional */}
          <div>
            <h4 className="text-white font-semibold mb-3">Instituto Angolano da Propriedade Industrial</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 text-secondary-500" />
                <span>Rua X, Edifício IAPI, Luanda</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faPhone} className="mt-1 text-secondary-500" />
                <span>+244 222 XXX XXX</span>
              </li>
              <li className="flex items-start gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 text-secondary-500" />
                <span>geral@iapi.ao</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Parcerias e selos */}
          <div>
            <h4 className="text-white font-semibold mb-3">Parcerias</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">GOVERNO.AO 27</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">CUTE</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs">Ministério da Indústria</span>
            </div>
            <div className="mt-6 text-xs text-primary-300">
              <span>Digitalização &amp; Interoperabilidade</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-400 text-center text-xs text-primary-300">
          Desenvolvido no âmbito da disciplina Aplicações e Serviços na Web – Universidade Agostinho Neto
        </div>
      </div>
    </footer>
  );
}