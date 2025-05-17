import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectGallery from '../components/portfolio/ProjectGallery';
import '../styles/ProjectPage.css';

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

interface ProjectTestimonial {
  quote: string;
  author: string;
  position: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: number;
  duration: string;
  description: string;
  challenge: string;
  solution: string;
  results: string;
  tools: string[];
  colors: string[];
  typography: string[];
  images: ProjectImage[];
  testimonial?: ProjectTestimonial;
  relatedProjects: string[];
}

interface ProjectsData {
  [key: string]: Project;
}

// Dados de exemplo para projetos
const projectsData: ProjectsData = {
  'projeto-alpha': {
    id: 'projeto-alpha',
    title: 'Projeto Alpha',
    category: 'Branding',
    client: 'Cliente Alpha',
    year: 2025,
    duration: '3 meses',
    description: 'Redesign completo da identidade visual da marca Alpha, incluindo logotipo, paleta de cores, tipografia e aplicações em diversos materiais.',
    challenge: 'A marca precisava de uma atualização que mantivesse sua essência, mas a tornasse mais moderna e atraente para um público jovem.',
    solution: 'Desenvolvemos uma identidade visual contemporânea que preserva elementos-chave da marca original, mas com uma abordagem mais minimalista e versátil.',
    results: 'Aumento de 40% no reconhecimento da marca e feedback extremamente positivo dos clientes sobre a nova identidade.',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
    colors: ['#3b82f6', '#1c1c1c', '#f4f4f4', '#10b981'],
    typography: ['Poppins', 'Montserrat'],
    images: [
      {
        url: '/images/portfolio/projeto-alpha/imagem-1.webp',
        alt: 'Logo principal do Projeto Alpha',
        caption: 'Logo principal em versão colorida'
      },
      {
        url: '/images/portfolio/projeto-alpha/imagem-2.webp',
        alt: 'Aplicação em cartão de visita',
        caption: 'Cartões de visita com acabamento especial'
      },
      {
        url: '/images/portfolio/projeto-alpha/imagem-3.webp',
        alt: 'Aplicação em papelaria',
        caption: 'Kit de papelaria corporativa'
      },
      {
        url: '/images/portfolio/projeto-alpha/imagem-4.webp',
        alt: 'Aplicação em mockup de camiseta',
        caption: 'Aplicação em uniforme da equipe'
      }
    ],
    testimonial: {
      quote: "A Westy Creative entendeu perfeitamente nossa visão e a traduziu em uma identidade visual que superou todas as nossas expectativas.",
      author: "João Silva",
      position: "CEO, Empresa Alpha"
    },
    relatedProjects: ['projeto-epsilon', 'projeto-gamma']
  },
  // Outros projetos seriam adicionados aqui
};

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Verificar se o projeto existe
  if (!id || !projectsData[id]) {
    return (
      <Layout>
        <div className="container project-not-found">
          <h2>Projeto não encontrado</h2>
          <p>O projeto que você está procurando não existe ou foi removido.</p>
          <Link to="/portfolio" className="btn btn-primary">
            Voltar ao Portfólio
          </Link>
        </div>
      </Layout>
    );
  }
  
  const project = projectsData[id];
  
  return (
    <Layout>
      <div className="project-page">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container">
            <Link to="/">Início</Link> &gt; <Link to="/portfolio">Portfólio</Link> &gt; <span>{project.title}</span>
          </div>
        </div>
        
        {/* Cabeçalho do Projeto */}
        <section className="project-header">
          <div className="container">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.description}</p>
            
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-label">Cliente:</span>
                <span className="meta-value">{project.client}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Categoria:</span>
                <span className="meta-value">{project.category}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Ano:</span>
                <span className="meta-value">{project.year}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duração:</span>
                <span className="meta-value">{project.duration}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Galeria Principal */}
        <section className="project-gallery-section">
          <div className="container">
            <ProjectGallery images={project.images} />
          </div>
        </section>
        
        {/* Descrição do Projeto */}
        <section className="project-description-section">
          <div className="container">
            <div className="project-description-grid">
              <div className="description-column">
                <SectionTitle title="Sobre o Projeto" alignment="left" />
                <div className="description-content">
                  <p>{project.description}</p>
                </div>
              </div>
              
              <div className="description-column">
                <div className="challenge-solution">
                  <h3>Desafio</h3>
                  <p>{project.challenge}</p>
                  
                  <h3>Solução</h3>
                  <p>{project.solution}</p>
                  
                  <h3>Resultados</h3>
                  <p>{project.results}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Especificações Técnicas */}
        <section className="project-specs-section">
          <div className="container">
            <SectionTitle title="Especificações Técnicas" />
            
            <div className="specs-grid">
              <div className="specs-item">
                <h4>Ferramentas Utilizadas</h4>
                <ul className="tools-list">
                  {project.tools.map((tool: string, index: number) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
              
              <div className="specs-item">
                <h4>Paleta de Cores</h4>
                <div className="color-palette">
                  {project.colors.map((color: string, index: number) => (
                    <div 
                      key={index} 
                      className="color-swatch" 
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      <span className="color-code">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="specs-item">
                <h4>Tipografia</h4>
                <ul className="typography-list">
                  {project.typography.map((font: string, index: number) => (
                    <li key={index} style={{ fontFamily: font }}>{font}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Depoimento do Cliente */}
        {project.testimonial && (
          <section className="project-testimonial-section">
            <div className="container">
              <div className="testimonial-box">
                <div className="testimonial-quote">
                  <blockquote>
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-author">
                    <p className="author-name">{project.testimonial.author}</p>
                    <p className="author-position">{project.testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Navegação entre Projetos */}
        <section className="project-navigation">
          <div className="container">
            <div className="nav-projects">
              <Link to={`/projeto/${project.relatedProjects[0]}`} className="nav-project prev">
                <span className="nav-label">Projeto Anterior</span>
              </Link>
              <Link to={`/projeto/${project.relatedProjects[1]}`} className="nav-project next">
                <span className="nav-label">Próximo Projeto</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Projetos Relacionados */}
        <section className="related-projects-section">
          <div className="container">
            <SectionTitle 
              title="Projetos Relacionados" 
              subtitle="Confira outros trabalhos similares"
            />
            
            <div className="related-projects-grid">
              {project.relatedProjects.map((relatedId: string) => (
                <div key={relatedId} className="related-project-card">
                  <Link to={`/projeto/${relatedId}`} className="related-project-link">
                    <img 
                      src={`/images/portfolio/${relatedId}/imagem-1.webp`} 
                      alt={`Projeto relacionado ${relatedId}`} 
                      className="related-project-image"
                    />
                    <div className="related-project-info">
                      <h4>{relatedId.replace('-', ' ').toUpperCase()}</h4>
                      <p>Ver projeto</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call-to-Action */}
        <section className="project-cta-section">
          <div className="container">
            <div className="cta-content">
              <h3>Gostou deste projeto?</h3>
              <p>Vamos trabalhar juntos para criar algo incrível para sua marca</p>
              <Link to="/contato" className="btn btn-primary">
                Solicite um Orçamento
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ProjectPage;
