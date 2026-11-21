# Nexo · direção 5

Skill principal: [UI/UX Pro Max](/home/codex/.codex/skills/ui-ux-pro-max/SKILL.md). Também foram lidos `references/quick-reference.md` (regras web, especialmente acessibilidade/interação/performance), `references/pro-rules.md` (seu escopo nativo foi reconhecido, sem importar convenções nativas para web), `AGENTS.md` e a referência Sites `presentation-led.md`.

## Pesquisa verificada

Script inspecionado e executado por caminho absoluto:

```sh
python3 /home/codex/.codex/skills/ui-ux-pro-max/scripts/search.py 'software consultancy digital services' --design-system -p 'Nexo Site 5'
python3 /home/codex/.codex/skills/ui-ux-pro-max/scripts/search.py 'signals computed accessible components' --stack angular
```

O primeiro ensaio (`B2B consultancy service professional`) retornou tipografia EB Garamond/Lato com perfil jurídico tradicional. Esse direcionamento não corresponde à empresa de tecnologia e foi rejeitado. A única tentativa de refinamento acima teve resultado pertinente e verificado:

| Campo          | Resultado da consulta                                        | Seleção para esta implementação                                                                         |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Padrão         | Hero + Features + CTA                                        | Hero com produto conceitual, catálogo, seletor de direção e CTAs contextuais                            |
| Estilo         | Minimalism & Swiss Style                                     | Grid, clareza funcional, contraste, espaços e hierarquia tipográfica                                    |
| Tipografia     | Outfit / Work Sans                                           | Personalidade geométrica sans mantida com Plus Jakarta Sans variável local, escolhida para esta direção |
| Paleta         | Azul profissional + verde de serviços                        | Substituída pela direção explícita do projeto: petróleo `#073D42`, mint `#E3F2EE`, amarelo `#FFC86A`    |
| Efeitos        | Hover sutil 200–250ms, hierarquia clara, carregamento rápido | Transições de estado curtas; nenhuma animação infinita ou parallax                                      |
| Acessibilidade | 4.5:1 texto, teclado, foco visível, reduced motion           | Elementos nativos, skip link, status do resultado e estilos de foco                                     |

Consulta Angular: fonte `stacks/angular.csv`, 3 resultados aplicáveis a Angular 22.x: **Use computed() for derived state**, **Use effect() carefully**, **Use signals for state**. O seletor usa signals para escolhas e um `computed()` para a recomendação, sem efeitos para sincronizar estado derivado. Angular 22 foi confirmado no `package.json`.

## Composição e experiência

A navegação é comercial e curta. O hero contrapõe uma mensagem humana a um workspace ilustrativo construído em CSS/SVG, com site, dados e fluxo de automação. O rótulo explicita sua natureza conceitual; não há resultados ou clientes fictícios. As soluções são uma lista expansível em vez de uma grade de cards. Cada expansão revela contexto, possíveis entregáveis e um briefing específico.

O ponto de partida é o centro interativo: um objetivo e o estado atual da operação produzem uma sugestão determinística. Para operação começando do zero, sugere software; com ferramentas dispersas ou solução existente, automação. Presença sugere site, dados sugere BI, atendimento sugere IA/chatbots. O contexto modifica também a orientação escrita. É uma triagem inicial, sem diagnóstico automático, preço ou promessa. Seu botão transfere o serviço para o briefing.

O processo usa três entregas qualitativas, sem cronogramas inventados. A equipe destaca somente os nomes e competências fornecidos. Os demais sócios apoiam o negócio; direito e engenharia civil não aparecem como serviços profissionais. FAQ trata escopo, atendimento remoto, investimento e suporte sem condições comerciais inventadas.

## Tokens e acessibilidade

Cor escura principal sobre fundos claros, branco sobre petróleo e petróleo sobre amarelo. Corpo em 16px; controles e rótulos regulares em pelo menos 14px; metadados em pelo menos 12px. A ilustração do hero é um único `role=img` com descrição; os textos em miniatura são parte do desenho conceitual. Sem imagens raster: `NgOptimizedImage` não é necessário. Ícones SVG nativos no componente comum, sem emojis.

Foco visível, navegação mobile por botão com `aria-expanded`, Escape para menu e diálogo, botões de seleção com `aria-pressed`, seções nomeadas e FAQ nativo `details`. Sem blocos dependentes de hover. A página respeita `prefers-reduced-motion`. O briefing usa `dialog` nativo, validação, foco de erro e resumo local com copiar/baixar; o e-mail permanece vazio e nenhum envio é simulado.

Fonte: Plus Jakarta Sans variável de [Google Fonts](https://github.com/google/fonts/tree/main/ofl/plusjakartasans), arquivo `PlusJakartaSans[wght].ttf`, eixo `fvar` verificado diretamente no binário (`wght` de 200 a 800), redistribuído localmente com SIL OFL em `public/fonts/plus-jakarta-LICENSE.txt`.

## Verificação da entrega

Build de produção sem warnings de orçamento; 7 testes passando (4 interações da página e 3 do briefing). QA central do agente principal: cinco auditorias AXE completas sem violações, sem overflow nas larguras 320, 360, 390, 640, 768 e 1024; sem erros de runtime, requests falhos ou âncoras inválidas. Fluxos de objetivo/contexto, catálogo e briefing com copiar, baixar e Escape verificados. Capturas desktop, mobile e página completa foram inspecionadas: hierarquia e ilustração mantêm legibilidade e a composição alterna lista, seletor, processo editorial e equipe.
