import { Link } from 'react-router-dom';
import '../../styles/Hero.css';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, backgroundImage }: HeroProps) => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImage})` }}
      id="home" 
      aria-labelledby="hero-title"
    >
      <div className="container hero-content">
        <h2 id="hero-title">
          {title.split(' ').map((word, index, array) => {
            // Destaca a última palavra ou a palavra "experiências"
            if (index === array.length - 1 || word.toLowerCase().includes('experiência')) {
              return <span key={index}> <span className="highlight">{word}</span></span>;
            }
            return <span key={index}> {word}</span>;
          })}
        </h2>
        <p className="subtitle">{subtitle}</p>
        <Link to={ctaLink} className="btn btn-primary">{ctaText}</Link>
      </div>
    </section>
  );
};

export default Hero;
