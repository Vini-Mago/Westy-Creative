import '../../styles/SectionTitle.css';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  light?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  light = false 
}: SectionTitleProps) => {
  return (
    <div className={`section-title-container ${alignment} ${light ? 'light' : ''}`}>
      <h3 className="section-title">{title}</h3>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
