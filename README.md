# Nexo · Site 5

Direção independente de site institucional em português brasileiro, construída com Angular 22, TypeScript strict e UI/UX Pro Max como skill principal. Design e decisões verificadas em [DESIGN.md](./DESIGN.md).

## Executar localmente

Requer Node compatível com Angular 22. No ambiente deste projeto, Node 24 está em `/tmp/node-v24.22.1-linux-x64/bin`.

```sh
npm ci
npm start
```

Abrir `http://localhost:4205`. Validação: `npm run build` e `npm test -- --watch=false`.

## Conteúdo e interações

- Catálogo de cinco soluções com descrição e possíveis entregáveis expansíveis.
- Seletor de ponto de partida com objetivo e situação atual, recomendação determinística e briefing contextual.
- FAQ nativo, menu responsivo e navegação por âncoras.
- Briefing validado, preparado no dispositivo, com copiar e baixar `.txt`. Nada é enviado automaticamente. O endereço em `src/app/ui/contact.config.ts` está vazio por falta de contato real fornecido.

Nexo é nome provisório. Não há preços, depoimentos, métricas, clientes ou cases inventados. A ilustração de produtos é conceitual. Produtos podem ser independentes e se conectar conforme a demanda.

## Proveniência

A configuração Angular e os componentes utilitários iniciais foram copiados de site1 pelo agente principal. A página, o layout, o tema, os dados e a interação central foram substituídos integralmente nesta pasta. O briefing comum foi mantido e adaptado ao tema com sua validação original e testes. A composição visual foi criada em CSS e SVG nativos. Plus Jakarta Sans variável é distribuída localmente, com licença SIL OFL e origem documentadas em DESIGN.md. Nenhum pacote de UI externo foi adicionado.

Esta entrega é local. Não houve publicação ou configuração de hospedagem.
