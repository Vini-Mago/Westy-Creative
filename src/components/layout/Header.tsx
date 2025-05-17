import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="container header-container">
        <Link to="/" className="logo-link" aria-label="Página inicial Westy Creative">
          <h1 className="logo-text">Westy Creative</h1>
        </Link>
        
        <nav className="main-nav" aria-label="Navegação principal">
          <button 
            className={`nav-toggle ${isMenuOpen ? 'nav-open' : ''}`} 
            aria-label="Abrir menu" 
            aria-expanded={isMenuOpen} 
            aria-controls="menu-list"
            onClick={toggleMenu}
          >
            <span className="hamburger"></span>
          </button>
          
          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`} id="menu-list">
            <li><Link to="/" className="nav-link">Início</Link></li>
            <li><Link to="/portfolio" className="nav-link">Portfólio</Link></li>
            <li><Link to="/sobre" className="nav-link">Sobre</Link></li>
            <li><Link to="/contato" className="nav-link">Contato</Link></li>
            <li>
              <Link to="/contato?tipo=orcamento" className="btn btn-primary">
                Solicitar Orçamento
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
