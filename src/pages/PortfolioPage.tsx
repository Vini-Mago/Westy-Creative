import { useState } from 'react';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import '../styles/PortfolioPage.css';

// Dados de exemplo para projetos
const allProjects = [
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
  },
  {
    id: 'projeto-eta',
    title: 'Projeto Eta',
    category: 'UI/UX',
    thumbnailUrl: '/images/portfolio/projeto-eta/imagem-1.webp',
    client: 'Cliente Eta',
    year: 2022
  },
  {
    id: 'projeto-theta',
    title: 'Projeto Theta',
    category: 'Social Media',
    thumbnailUrl: '/images/portfolio/projeto-theta/imagem-1.webp',
    client: 'Cliente Theta',
    year: 2021
  },
  {
    id: 'projeto-iota',
    title: 'Projeto Iota',
    category: 'Branding',
    thumbnailUrl: '/images/portfolio/projeto-iota/imagem-1.webp',
    client: 'Cliente Iota',
    year: 2021
  }
];

// Categorias para filtros
const categories = ['Branding', 'Web Design', 'UI/UX', 'Social Media'];

const PortfolioPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtrar projetos por pesquisa
  const filteredProjects = searchQuery 
    ? allProjects.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.client && project.client.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : allProjects;
  
  return (
    <Layout>
      <div className="portfolio-page">
        {/* Banner de Topo */}
        <section className="portfolio-banner">
          <div className="container">
            <h1>Nosso Portfólio</h1>
            <p>Conheça nossos projetos de design e cases de sucesso</p>
          </div>
        </section>
        
        {/* Sistema de Filtros */}
        <section className="portfolio-filters-section">
          <div className="container">
            <div className="filters-container">
              <div className="search-filter">
                <input 
                  type="text" 
                  placeholder="Buscar projetos..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button className="search-btn">
                  <span className="search-icon">🔍</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grid de Projetos */}
        <section className="portfolio-grid-section">
          <div className="container">
            <SectionTitle 
              title={searchQuery ? `Resultados para "${searchQuery}"` : "Todos os Projetos"} 
              subtitle={`${filteredProjects.length} projeto${filteredProjects.length !== 1 ? 's' : ''} encontrado${filteredProjects.length !== 1 ? 's' : ''}`}
            />
            
            <ProjectGrid 
              projects={filteredProjects}
              categories={categories}
            />
            
            {/* Paginação (simplificada para este exemplo) */}
            {filteredProjects.length > 0 && (
              <div className="pagination">
                <button className="load-more-btn">
                  Carregar Mais Projetos
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Call-to-Action */}
        <section className="portfolio-cta-section">
          <div className="container">
            <div className="cta-content">
              <h3>Tem um projeto em mente?</h3>
              <p>Vamos trabalhar juntos para transformar suas ideias em realidade</p>
              <a href="/contato" className="btn btn-primary">
                Solicite um Orçamento
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PortfolioPage;
