import { Link } from 'react-router-dom';
import '../../styles/ContactForm.css';
import { useState, FormEvent } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    budget: '',
    deadline: '',
    howFound: '',
    acceptTerms: false,
    projectTypes: {
      branding: false,
      webDesign: false,
      uiUx: false,
      socialMedia: false,
      other: false
    }
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você precisa aceitar os termos de privacidade';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      
      if (name.startsWith('projectType-')) {
        const projectType = name.replace('projectType-', '');
        setFormData(prev => ({
          ...prev,
          projectTypes: {
            ...prev.projectTypes,
            [projectType]: checkbox.checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checkbox.checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulação de envio bem-sucedido
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      
      // Em um caso real, aqui seria feita a chamada para uma API
      console.log('Formulário enviado:', formData);
      
      // Limpar formulário após envio bem-sucedido
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        budget: '',
        deadline: '',
        howFound: '',
        acceptTerms: false,
        projectTypes: {
          branding: false,
          webDesign: false,
          uiUx: false,
          socialMedia: false,
          other: false
        }
      });
    }
  };

  return (
    <div className="contact-form-container">
      {formStatus.submitted && formStatus.success ? (
        <div className="form-success">
          <h3>Obrigado pelo contato!</h3>
          <p>{formStatus.message}</p>
          <button 
            className="btn btn-primary"
            onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
          >
            Enviar nova mensagem
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Empresa/Organização</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Assunto *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={errors.subject ? 'error' : ''}
            >
              <option value="">Selecione um assunto</option>
              <option value="orcamento">Orçamento</option>
              <option value="duvida">Dúvidas</option>
              <option value="parceria">Parceria</option>
              <option value="outro">Outro</option>
            </select>
            {errors.subject && <span className="error-message">{errors.subject}</span>}
          </div>
          
          <div className="form-group">
            <label>Tipo de projeto</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="projectType-branding"
                  checked={formData.projectTypes.branding}
                  onChange={handleChange}
                />
                Branding
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="projectType-webDesign"
                  checked={formData.projectTypes.webDesign}
                  onChange={handleChange}
                />
                Web Design
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="projectType-uiUx"
                  checked={formData.projectTypes.uiUx}
                  onChange={handleChange}
                />
                UI/UX
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="projectType-socialMedia"
                  checked={formData.projectTypes.socialMedia}
                  onChange={handleChange}
                />
                Social Media
              </label>
              
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="projectType-other"
                  checked={formData.projectTypes.other}
                  onChange={handleChange}
                />
                Outro
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Orçamento estimado</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Selecione uma faixa</option>
                <option value="ate-5k">Até R$ 5.000</option>
                <option value="5k-10k">R$ 5.000 a R$ 10.000</option>
                <option value="10k-20k">R$ 10.000 a R$ 20.000</option>
                <option value="acima-20k">Acima de R$ 20.000</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="deadline">Prazo desejado</label>
              <select
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
              >
                <option value="">Selecione um prazo</option>
                <option value="urgente">Urgente (até 1 semana)</option>
                <option value="curto">Curto (até 1 mês)</option>
                <option value="medio">Médio (1-3 meses)</option>
                <option value="longo">Longo (mais de 3 meses)</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="howFound">Como nos conheceu?</label>
            <select
              id="howFound"
              name="howFound"
              value={formData.howFound}
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              <option value="google">Google</option>
              <option value="redes-sociais">Redes Sociais</option>
              <option value="indicacao">Indicação</option>
              <option value="behance">Behance</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div className="form-group terms-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className={errors.acceptTerms ? 'error' : ''}
              />
              Concordo com a <Link to="/privacidade">Política de Privacidade</Link> *
            </label>
            {errors.acceptTerms && <span className="error-message">{errors.acceptTerms}</span>}
          </div>
          
          <button type="submit" className="btn btn-primary btn-submit">
            Enviar Mensagem
          </button>
          
          {formStatus.submitted && !formStatus.success && (
            <div className="form-error">
              <p>{formStatus.message || 'Ocorreu um erro ao enviar o formulário. Tente novamente.'}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
