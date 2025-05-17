import { Link } from 'react-router-dom';
import '../../styles/ProjectCard.css';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  client?: string;
  year?: number;
}

const ProjectCard = ({ id, title, category, thumbnailUrl, client, year }: ProjectCardProps) => {
  return (
    <article className="portfolio-item">
      <Link to={`/projeto/${id}`} className="portfolio-link" aria-label={`Ver detalhes do projeto ${title}`}>
        <div className="portfolio-image-container">
          <img src={thumbnailUrl} alt={`Thumbnail do projeto ${title}`} className="portfolio-image" />
        </div>
        <div className="portfolio-overlay">
          <h4>{title}</h4>
          <p>{category}</p>
          {(client || year) && (
            <div className="portfolio-meta">
              {client && <span className="portfolio-client">{client}</span>}
              {year && <span className="portfolio-year">{year}</span>}
            </div>
          )}
          <div className="portfolio-view-btn">Ver Projeto</div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
