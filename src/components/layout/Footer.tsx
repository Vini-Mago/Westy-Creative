import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <h2>Westy Creative</h2>
            </Link>
            <p className="footer-tagline">Transformamos ideias em experiências visuais memoráveis</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="social-icon instagram"></i>
              </a>
              <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                <i className="social-icon behance"></i>
              </a>
              <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="social-icon linkedin"></i>
              </a>
              <a href="#" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                <i className="social-icon pinterest"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navegação</h3>
              <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/portfolio">Portfólio</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Serviços</h3>
              <ul>
                <li><Link to="/portfolio?categoria=branding">Branding</Link></li>
                <li><Link to="/portfolio?categoria=web-design">Web Design</Link></li>
                <li><Link to="/portfolio?categoria=ui-ux">UI/UX</Link></li>
                <li><Link to="/portfolio?categoria=social-media">Social Media</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Contato</h3>
              <ul className="contact-info">
                <li><a href="mailto:contato@westycreative.com">contato@westycreative.com</a></li>
                <li><a href="tel:+5500999999999">+55 (00) 99999-9999</a></li>
                <li>São Paulo, SP - Brasil</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Westy Creative. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <Link to="/termos">Termos de Uso</Link>
            <Link to="/privacidade">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
