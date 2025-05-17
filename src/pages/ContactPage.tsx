import Layout from '../components/layout/Layout';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import '../styles/ContactPage.css';

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-page">
        {/* Banner de Topo */}
        <section className="contact-banner">
          <div className="container">
            <h1>Entre em Contato</h1>
            <p>Estamos prontos para transformar suas ideias em realidade</p>
          </div>
        </section>
        
        {/* Layout de Duas Colunas */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              {/* Coluna Esquerda - Informações de Contato */}
              <div className="contact-info">
                <SectionTitle 
                  title="Fale Conosco" 
                  alignment="left"
                />
                
                <p className="contact-intro">
                  Tem um projeto em mente ou precisa de mais informações sobre nossos serviços? 
                  Entre em contato conosco e teremos prazer em ajudar.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon email-icon"></div>
                    <div className="contact-text">
                      <h4>Email</h4>
                      <a href="mailto:contato@westycreative.com">contato@westycreative.com</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon phone-icon"></div>
                    <div className="contact-text">
                      <h4>Telefone</h4>
                      <a href="tel:+5500999999999">+55 (00) 99999-9999</a>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon location-icon"></div>
                    <div className="contact-text">
                      <h4>Endereço</h4>
                      <p>São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <div className="contact-icon time-icon"></div>
                    <div className="contact-text">
                      <h4>Horário de Funcionamento</h4>
                      <p>Segunda a Sexta: 9h às 18h</p>
                    </div>
                  </div>
                </div>
                
                <div className="contact-social">
                  <h4>Siga-nos nas Redes Sociais</h4>
                  <div className="social-links">
                    <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon instagram"></div>
                    </a>
                    <a href="#" aria-label="Behance" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon behance"></div>
                    </a>
                    <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon linkedin"></div>
                    </a>
                    <a href="#" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
                      <div className="social-icon pinterest"></div>
                    </a>
                  </div>
                </div>
                
                <div className="map-container">
                  <div className="map-placeholder">
                    <p>Mapa será carregado aqui</p>
                  </div>
                </div>
              </div>
              
              {/* Coluna Direita - Formulário de Contato */}
              <div className="contact-form-section">
                <SectionTitle 
                  title="Envie uma Mensagem" 
                  alignment="left"
                />
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <SectionTitle 
              title="Perguntas Frequentes" 
              subtitle="Respostas para as dúvidas mais comuns"
            />
            
            <div className="faq-accordion">
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Qual é o prazo médio para conclusão de um projeto?</h4>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>O prazo varia de acordo com a complexidade do projeto. Em média, projetos de branding levam de 3 a 6 semanas, websites de 4 a 8 semanas, e campanhas de social media de 2 a 4 semanas. Durante nossa conversa inicial, forneceremos um cronograma detalhado específico para o seu projeto.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Como funciona o processo de trabalho?</h4>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>Nosso processo inclui: 1) Briefing e descoberta, onde entendemos suas necessidades; 2) Pesquisa e estratégia; 3) Conceituação e design; 4) Refinamento com base em seu feedback; 5) Finalização e entrega; 6) Suporte pós-projeto. Mantemos comunicação constante durante todo o processo.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Quais informações são necessárias para iniciar um projeto?</h4>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>Para iniciar, precisamos entender seus objetivos, público-alvo, concorrentes, preferências estéticas, prazos e orçamento. Temos um questionário detalhado que enviamos após o contato inicial para coletar todas as informações necessárias.</p>
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question">
                  <h4>Vocês oferecem suporte após a conclusão do projeto?</h4>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>Sim, oferecemos suporte técnico por 30 dias após a entrega final do projeto. Para necessidades contínuas, temos planos de manutenção mensal que podem ser contratados separadamente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call-to-Action Alternativo */}
        <section className="alt-cta-section">
          <div className="container">
            <div className="alt-cta-content">
              <h3>Prefere conversar por telefone?</h3>
              <p>Estamos disponíveis para esclarecer suas dúvidas</p>
              <a href="tel:+5500999999999" className="btn btn-secondary">
                Ligar Agora
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
