import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Hero from '../components/ui/Hero';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import '../styles/HomePage.css';

// Dados de exemplo para projetos em destaque
const featuredProjects = [
  {
    id: 'projeto-alpha',
    title: 'Projeto Alpha',
    category: 'Branding',
    thumbnailUrl: '/images/portfolio/projeto-alpha/imagem-1.webp',
    client: 'Cliente Alpha',
    year: 2025
  },
  {
    id: 'projeto-beta',
    title: 'Projeto Beta',
    category: 'Web Design',
    thumbnailUrl: '/images/portfolio/projeto-beta/imagem-1.webp',
    client: 'Cliente Beta',
    year: 2024
  },
  {
    id: 'projeto-gamma',
    title: 'Projeto Gamma',
    category: 'UI/UX',
    thumbnailUrl: '/images/portfolio/projeto-gamma/imagem-1.webp',
    client: 'Cliente Gamma',
    year: 2024
  },
  {
    id: 'projeto-delta',
    title: 'Projeto Delta',
    category: 'Social Media',
    thumbnailUrl: '/images/portfolio/projeto-delta/imagem-1.webp',
    client: 'Cliente Delta',
    year: 2023
  },
  {
    id: 'projeto-epsilon',
    title: 'Projeto Epsilon',
    category: 'Branding',
    thumbnailUrl: '/images/portfolio/projeto-epsilon/imagem-1.webp',
    client: 'Cliente Epsilon',
    year: 2023
  },
  {
    id: 'projeto-zeta',
    title: 'Projeto Zeta',
    category: 'Web Design',
    thumbnailUrl: '/images/portfolio/projeto-zeta/imagem-1.webp',
    client: 'Cliente Zeta',
    year: 2022
  }
];

// Categorias para filtros
const categories = ['Branding', 'Web Design', 'UI/UX', 'Social Media'];

const HomePage = () => {
  return (
    <Layout>
      <Hero 
        title="Transformamos ideias em experiências visuais memoráveis"
        subtitle="Design estratégico para marcas que querem se destacar"
        ctaText="Ver Portfólio"
        ctaLink="/portfolio"
        backgroundImage="/images/hero-background.webp"
      />
      
      <section className="categories-section">
        <div className="container">
          <div className="categories-filter">
            <button className="category-btn active">Todos os Projetos</button>
            {categories.map(category => (
              <button key={category} className="category-btn">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      <section className="featured-projects-section">
        <div className="container">
          <SectionTitle 
            title="Projetos em Destaque" 
            subtitle="Conheça alguns dos nossos trabalhos mais recentes"
          />
          
          <ProjectGrid 
            projects={featuredProjects}
          />
          
          <div className="view-all-container">
            <Link to="/portfolio" className="btn btn-secondary">
              Ver Todos os Projetos
            </Link>
          </div>
        </div>
      </section>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <SectionTitle 
                title="Sobre a Westy Creative" 
                alignment="left"
              />
              <p>Somos um estúdio de design especializado em criar soluções visuais que não apenas encantam, mas também geram resultados concretos para nossos clientes.</p>
              <p>Com foco em branding, web design, UI/UX e social media, trabalhamos para transformar ideias em experiências visuais memoráveis que conectam marcas ao seu público.</p>
              <Link to="/sobre" className="btn btn-outline">
                Conheça Nossa História
              </Link>
            </div>
            <div className="about-image">
              <img src="/images/about-home.webp" alt="Equipe Westy Creative" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">120+</div>
              <div className="stat-label">Projetos Concluídos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Clientes Satisfeitos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Prêmios Recebidos</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <SectionTitle 
            title="O Que Nossos Clientes Dizem" 
          />
          
          <div className="testimonial-slider">
            <div className="testimonial-item">
              <div className="testimonial-content">
                <p>"A Westy Creative transformou completamente a identidade visual da nossa marca. O resultado superou todas as expectativas e impactou diretamente nos nossos resultados."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Ana Silva</h4>
                  <p>Diretora de Marketing, Empresa Alpha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h3>Pronto para iniciar seu projeto?</h3>
            <p>Entre em contato para discutirmos suas ideias</p>
            <Link to="/contato" className="btn btn-light">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
