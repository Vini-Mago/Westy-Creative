import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <Layout>
      <div className="about-page">
        {/* Banner de Topo */}
        <section className="about-banner">
          <div className="container">
            <h1>Sobre a Westy Creative</h1>
            <p>Conheça nossa história, valores e equipe</p>
          </div>
        </section>
        
        {/* História da Empresa */}
        <section className="history-section">
          <div className="container">
            <div className="history-content">
              <div className="history-text">
                <SectionTitle 
                  title="Nossa História" 
                  alignment="left"
                />
                <p>A Westy Creative nasceu da paixão por design e da crença de que experiências visuais memoráveis podem transformar marcas e conectá-las profundamente com seu público.</p>
                <p>Fundada em 2017, começamos como um pequeno estúdio especializado em identidade visual. Com o tempo, expandimos nossos serviços para abranger todo o espectro do design, desde branding até web design, UI/UX e social media.</p>
                <p>Ao longo dos anos, tivemos o privilégio de trabalhar com empresas de diversos segmentos, desde startups inovadoras até marcas consolidadas no mercado, sempre com o compromisso de entregar soluções criativas que geram resultados concretos.</p>
              </div>
              <div className="history-image">
                <img src="/images/about-history.webp" alt="Fundação da Westy Creative" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Missão, Visão e Valores */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-item">
                <div className="mission-icon mission-icon"></div>
                <h3>Missão</h3>
                <p>Transformar ideias em experiências visuais memoráveis que conectam marcas ao seu público e geram resultados concretos.</p>
              </div>
              
              <div className="mission-item">
                <div className="mission-icon vision-icon"></div>
                <h3>Visão</h3>
                <p>Ser reconhecida como referência em design estratégico, criando soluções visuais que inspiram e impactam positivamente o mercado.</p>
              </div>
              
              <div className="mission-item">
                <div className="mission-icon values-icon"></div>
                <h3>Valores</h3>
                <p>Criatividade, excelência, colaboração, transparência e compromisso com resultados guiam todas as nossas ações e decisões.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nossa Equipe */}
        <section className="team-section">
          <div className="container">
            <SectionTitle 
              title="Conheça Nossa Equipe" 
              subtitle="Profissionais apaixonados por design e inovação"
            />
            
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team-member-1.webp" alt="Nome do Membro da Equipe" />
                </div>
                <div className="member-info">
                  <h4>Nome do Membro</h4>
                  <p className="member-role">Diretor Criativo</p>
                  <p className="member-bio">Breve biografia do membro da equipe, destacando experiência, especialidades e paixões.</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon linkedin"></div>
                    </a>
                    <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon behance"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team-member-2.webp" alt="Nome do Membro da Equipe" />
                </div>
                <div className="member-info">
                  <h4>Nome do Membro</h4>
                  <p className="member-role">Designer Sênior</p>
                  <p className="member-bio">Breve biografia do membro da equipe, destacando experiência, especialidades e paixões.</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon linkedin"></div>
                    </a>
                    <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon behance"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team-member-3.webp" alt="Nome do Membro da Equipe" />
                </div>
                <div className="member-info">
                  <h4>Nome do Membro</h4>
                  <p className="member-role">Web Designer</p>
                  <p className="member-bio">Breve biografia do membro da equipe, destacando experiência, especialidades e paixões.</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon linkedin"></div>
                    </a>
                    <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon behance"></div>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/team-member-4.webp" alt="Nome do Membro da Equipe" />
                </div>
                <div className="member-info">
                  <h4>Nome do Membro</h4>
                  <p className="member-role">UI/UX Designer</p>
                  <p className="member-bio">Breve biografia do membro da equipe, destacando experiência, especialidades e paixões.</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon linkedin"></div>
                    </a>
                    <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon behance"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Processo de Trabalho */}
        <section className="process-section">
          <div className="container">
            <SectionTitle 
              title="Como Trabalhamos" 
              subtitle="Nosso processo de design em 6 etapas"
            />
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Briefing e Descoberta</h4>
                  <p>Entendemos profundamente suas necessidades, objetivos e público-alvo para alinhar expectativas.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Pesquisa e Estratégia</h4>
                  <p>Analisamos o mercado, concorrentes e tendências para definir a melhor abordagem estratégica.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Conceituação e Design</h4>
                  <p>Desenvolvemos conceitos criativos e soluções visuais alinhadas à estratégia definida.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Refinamento e Aprovação</h4>
                  <p>Apresentamos as propostas, coletamos feedback e realizamos ajustes até a aprovação final.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Implementação e Entrega</h4>
                  <p>Finalizamos todos os materiais e entregamos os arquivos nos formatos adequados para cada aplicação.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h4>Acompanhamento e Suporte</h4>
                  <p>Oferecemos suporte pós-entrega para garantir a implementação correta e o sucesso do projeto.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Clientes e Parceiros */}
        <section className="clients-section">
          <div className="container">
            <SectionTitle 
              title="Quem Confia em Nosso Trabalho" 
              subtitle="Empresas que escolheram a Westy Creative"
            />
            
            <div className="clients-grid">
              {/* Logos de clientes seriam inseridos aqui */}
              <div className="client-logo">
                <img src="/images/client-logo-1.webp" alt="Logo Cliente 1" />
              </div>
              <div className="client-logo">
                <img src="/images/client-logo-2.webp" alt="Logo Cliente 2" />
              </div>
              <div className="client-logo">
                <img src="/images/client-logo-3.webp" alt="Logo Cliente 3" />
              </div>
              <div className="client-logo">
                <img src="/images/client-logo-4.webp" alt="Logo Cliente 4" />
              </div>
              <div className="client-logo">
                <img src="/images/client-logo-5.webp" alt="Logo Cliente 5" />
              </div>
              <div className="client-logo">
                <img src="/images/client-logo-6.webp" alt="Logo Cliente 6" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Depoimentos */}
        <section className="testimonials-section">
          <div className="container">
            <SectionTitle 
              title="O Que Nossos Clientes Dizem" 
            />
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
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
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"Profissionalismo, criatividade e comprometimento com prazos. A equipe da Westy entendeu perfeitamente nossas necessidades e entregou um trabalho excepcional."</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4>Carlos Mendes</h4>
                    <p>CEO, Empresa Beta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Diferenciais */}
        <section className="differentials-section">
          <div className="container">
            <SectionTitle 
              title="Por que Escolher a Westy Creative" 
              subtitle="Nossos diferenciais"
            />
            
            <div className="differentials-grid">
              <div className="differential-item">
                <div className="differential-icon expertise-icon"></div>
                <h4>Expertise Multidisciplinar</h4>
                <p>Nossa equipe reúne especialistas em diferentes áreas do design, garantindo soluções completas e integradas.</p>
              </div>
              
              <div className="differential-item">
                <div className="differential-icon strategy-icon"></div>
                <h4>Abordagem Estratégica</h4>
                <p>Não criamos apenas designs bonitos, mas soluções visuais estratégicas alinhadas aos objetivos de negócio.</p>
              </div>
              
              <div className="differential-item">
                <div className="differential-icon personalized-icon"></div>
                <h4>Atendimento Personalizado</h4>
                <p>Cada projeto recebe atenção exclusiva, com comunicação direta e transparente do início ao fim.</p>
              </div>
              
              <div className="differential-item">
                <div className="differential-icon results-icon"></div>
                <h4>Foco em Resultados</h4>
                <p>Nosso compromisso vai além da estética; buscamos criar designs que geram impacto mensurável para nossos clientes.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action */}
        <section className="about-cta-section">
          <div className="container">
            <div className="cta-content">
              <h3>Pronto para transformar suas ideias em realidade?</h3>
              <p>Vamos trabalhar juntos no seu próximo projeto</p>
              <a href="/contato" className="btn btn-primary">
                Entre em Contato
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
