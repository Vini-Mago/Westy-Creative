import { useState } from 'react';
import '../../styles/ProjectGrid.css';
import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  client?: string;
  year?: number;
}

interface ProjectGridProps {
  projects: Project[];
  categories?: string[];
}

const ProjectGrid = ({ projects, categories }: ProjectGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('recent');

  // Filtrar projetos por categoria
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Ordenar projetos
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === 'recent') {
      return (b.year || 0) - (a.year || 0);
    } else if (sortBy === 'oldest') {
      return (a.year || 0) - (b.year || 0);
    } else if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="portfolio-section">
      {categories && (
        <div className="portfolio-filters">
          <div className="category-filters">
            <button 
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              Todos os Projetos
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="sort-options">
            <label htmlFor="sort-select">Ordenar por:</label>
            <select 
              id="sort-select" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="recent">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
              <option value="title">Título (A-Z)</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="portfolio-grid">
        {sortedProjects.length > 0 ? (
          sortedProjects.map(project => (
            <ProjectCard 
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              thumbnailUrl={project.thumbnailUrl}
              client={project.client}
              year={project.year}
            />
          ))
        ) : (
          <div className="no-projects">
            <p>Nenhum projeto encontrado para esta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectGrid;
