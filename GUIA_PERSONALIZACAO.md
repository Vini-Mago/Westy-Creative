# Guia de Personalização - Site Westy Creative

Este guia fornece instruções detalhadas para personalizar e publicar o site estilo Behance da Westy Creative.

## Estrutura do Projeto

O site foi desenvolvido com React e possui a seguinte estrutura:

```
westy-behance-portfolio/
├── public/                  # Arquivos públicos e imagens
│   ├── images/              # Imagens do site
│   │   ├── portfolio/       # Imagens de projetos
│   │   └── ...
├── src/                     # Código-fonte
│   ├── components/          # Componentes reutilizáveis
│   │   ├── layout/          # Componentes de layout (Header, Footer)
│   │   ├── portfolio/       # Componentes de portfólio
│   │   └── ui/              # Componentes de interface
│   ├── pages/               # Páginas do site
│   ├── styles/              # Arquivos CSS
│   ├── App.tsx              # Componente principal
│   └── main.tsx             # Ponto de entrada
└── package.json             # Dependências e scripts
```

## Personalização

### 1. Substituir Imagens

Todas as imagens do site estão na pasta `public/images/`. Para substituir:

1. Mantenha a mesma estrutura de pastas
2. Use nomes de arquivos consistentes (ex: imagem-1.webp, imagem-2.webp)
3. Otimize as imagens para web (formato WebP recomendado)
4. Dimensões recomendadas:
   - Imagens de capa: 1200x800px
   - Imagens de projeto: 1920x1080px
   - Fotos de equipe: 600x600px (quadradas)

### 2. Editar Conteúdo

O conteúdo do site está distribuído nos arquivos dentro da pasta `src/pages/`:

- `HomePage.tsx`: Página inicial
- `PortfolioPage.tsx`: Galeria de projetos
- `ProjectPage.tsx`: Página de projeto individual
- `AboutPage.tsx`: Página sobre a empresa
- `ContactPage.tsx`: Página de contato

Para editar:
1. Localize o texto que deseja alterar
2. Modifique mantendo a estrutura HTML/JSX
3. Salve o arquivo

### 3. Adicionar Novos Projetos

Para adicionar novos projetos:

1. Crie uma pasta para o projeto em `public/images/portfolio/nome-do-projeto/`
2. Adicione as imagens do projeto nesta pasta
3. Edite o arquivo `src/pages/PortfolioPage.tsx` e adicione o novo projeto ao array `allProjects`
4. Adicione os detalhes completos do projeto em `src/pages/ProjectPage.tsx` no objeto `projectsData`

### 4. Personalizar Cores

As cores principais do site estão definidas em `src/App.css` nas variáveis CSS:

```css
:root {
  --primary-color: #3b82f6; /* Azul principal */
  --text-color: #1c1c1c;    /* Texto */
  --background-color: #f4f4f4; /* Fundo */
  /* ... outras cores ... */
}
```

Para alterar a paleta de cores, modifique estes valores mantendo o formato hexadecimal.

### 5. Personalizar Fontes

Para alterar as fontes:

1. Edite a variável `--font-family-base` em `src/App.css`
2. Certifique-se de importar a nova fonte no arquivo HTML ou via CSS

## Publicação

### Opção 1: Build para Hospedagem Estática

Para gerar os arquivos de produção:

1. Navegue até a pasta do projeto: `cd westy-behance-portfolio`
2. Execute: `pnpm run build`
3. Os arquivos otimizados serão gerados na pasta `dist/`
4. Faça upload destes arquivos para qualquer serviço de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.)

### Opção 2: Hospedagem com Vercel ou Netlify

Para publicação direta a partir do repositório:

1. Faça upload do código para um repositório Git (GitHub, GitLab, etc.)
2. Conecte sua conta Vercel ou Netlify ao repositório
3. Configure a build command como: `pnpm run build`
4. Configure o diretório de publicação como: `dist`

## Manutenção

### Atualização de Dependências

Para manter o site atualizado:

1. Execute: `pnpm update`
2. Teste o site localmente após atualizações

### Desenvolvimento Local

Para trabalhar no site localmente:

1. Navegue até a pasta do projeto: `cd westy-behance-portfolio`
2. Execute: `pnpm run dev`
3. Acesse o site em: `http://localhost:5173`

## Suporte

Para dúvidas ou suporte adicional, entre em contato através do email: contato@westycreative.com
