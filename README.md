# Desafio fase 1

### POS 360º - Faculdade de Tecnologia Rocketseat

Desafio da fase 1 da POS 360 da Faculdade de Tecnologia Rocketseat

# Entrega

Esse desafio deve ser entregue na nossa plataforma.
Para o envio, é necessário criar um repositório no GitHub e enviar o link do seu repositório na nossa plataforma com a sua resolução!

Porém, é **importante seguir alguns padrões** para que possamos **corrigir** corretamente o seu projeto:

- O repositório deve estar público;
- O repositório deve conter a resolução dos três desafios;
- O repositório deve ter duas subpastas
  - `web` vai conter a resolução completa do desafio Front-end;
  - `server` vai conter a resolução completa dos desafios Back-end e DevOps.
- O repositório deve conter o código referente as regras e funcionalidades obrigatórias. Caso queira se desafiar com funcionalidades extras (ex.: React SSR em vez de SPA), crie o código com essas alterações em uma nova `branch`, preservando o seu código original do desafio.

## Backend - Descrição e Requisitos

Nesse projeto back-end, será desenvolvido uma API para gerenciar o encurtamento de URL’s.

### Funcionalidades e Regras

- [ ] Deve ser possível criar um link
  - [ ] Não deve ser possível criar um link com URL encurtada mal formatada
  - [ ] Não deve ser possível criar um link com URL encurtada já existente
- [ ] Deve ser possível deletar um link
- [ ] Deve ser possível obter a URL original por meio de uma URL encurtada
- [ ] Deve ser possível listar todas as URL’s cadastradas
- [ ] Deve ser possível incrementar a quantidade de acessos de um link
- [ ] Deve ser possível exportar os links criados em um CSV
  - [ ] Deve ser possível acessar o CSV por meio de uma CDN (Amazon S3, Cloudflare R2, etc)
  - [ ] Deve ser gerado um nome aleatório e único para o arquivo
  - [ ] Deve ser possível realizar a listagem de forma performática
  - [ ] O CSV deve ter campos como, URL original, URL encurtada, contagem de acessos e data de criação.

## Frontend - Descrição e Requisitos

Nesse projeto front-end será desenvolvido uma aplicação React que, em conjunto com a API, permite o gerenciamento de URL’s encurtadas.

### Funcionalidades e Regras

Assim como na API, temos as seguintes funcionalidades e regras:

- [ ] Deve ser possível criar um link
  - [ ] Não deve ser possível criar um link com encurtamento mal formatado
  - [ ] Não deve ser possível criar um link com encurtamento já existente
- [ ] Deve ser possível deletar um link
- [ ] Deve ser possível obter a URL original por meio do encurtamento
- [ ] Deve ser possível listar todas as URL’s cadastradas
- [ ] Deve ser possível incrementar a quantidade de acessos de um link
- [ ] Deve ser possível baixar um CSV com o relatório dos links criados

Além disso, também temos algumas regras importantes específicas para o front-end:

- [ ] É obrigatória a criação de uma aplicação React no formato SPA utilizando o Vite como `bundler`;
- [ ] Siga o mais fielmente possível o layout do Figma;
- [ ] Trabalhe com elementos que tragam uma boa experiência ao usuário (`empty state`, ícones de carregamento, bloqueio de ações a depender do estado da aplicação);
- [ ] Foco na responsividade: essa aplicação deve ter um bom uso tanto em desktops quanto em celulares.

Layout da aplicação:
https://www.figma.com/community/file/1477335071553579816
