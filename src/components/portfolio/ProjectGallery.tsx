import { useState } from 'react';
import '../../styles/ProjectGallery.css';

interface ProjectGalleryProps {
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
}

const ProjectGallery = ({ images }: ProjectGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Impede rolagem quando modal está aberto
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = ''; // Restaura rolagem
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setActiveIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setActiveIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  // Fechar modal com tecla ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  });

  return (
    <div className="project-gallery-container">
      <div className="project-gallery">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="gallery-item" 
            onClick={() => openModal(index)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="gallery-image" 
            />
            {image.caption && (
              <div className="gallery-caption">
                <span>{image.caption}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal para visualização ampliada */}
      {isModalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            
            <div className="modal-image-container">
              <img 
                src={images[activeIndex].url} 
                alt={images[activeIndex].alt} 
                className="modal-image" 
              />
              
              {images[activeIndex].caption && (
                <div className="modal-caption">
                  <p>{images[activeIndex].caption}</p>
                </div>
              )}
            </div>
            
            <div className="modal-navigation">
              <button 
                className="nav-button prev" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                aria-label="Imagem anterior"
              >
                &lsaquo;
              </button>
              <div className="image-counter">
                {activeIndex + 1} / {images.length}
              </div>
              <button 
                className="nav-button next" 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                aria-label="Próxima imagem"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
