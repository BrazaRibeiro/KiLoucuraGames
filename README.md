# Ki Loucura Games

Site da loja Ki Loucura Games (Itapevi/SP).

## O que tem aqui

| Item | O que é |
|---|---|
| `index.html` | **O site principal.** Um arquivo só, funciona direto no navegador e no celular. Não precisa instalar nada. |
| `figma-make/` | Projeto de origem criado no Figma Make (React). **Arquivo de apoio, não é o site publicado.** |

## Painel do lojista (DEMONSTRAÇÃO)

Abra o site e acrescente `#admin` no endereço, ou toque em "Área do lojista" no rodapé. PIN de demonstração: `1234` (dá para trocar na aba "Cópia e PIN").

No painel o lojista muda: nome, descrição, preço, selo, categoria, foto e visibilidade de cada produto (e cria, exclui e reordena); textos do site; horário, endereço, telefone, WhatsApp, Instagram e CNPJ; logo e fotos da assistência e da loja.

**Importante: é só demonstração.** As mudanças ficam salvas no navegador do aparelho de quem editou (localStorage). Quem visita o site **não vê** as mudanças. O PIN só evita mexida sem querer, não é segurança de verdade.

Para valer para todos os visitantes falta ligar um banco de dados online (ex.: Supabase ou Firebase) com login de verdade. As fotos hoje ficam reduzidas e guardadas no aparelho.

## Como ver o site

Abra o arquivo `index.html` no navegador. Para deixar no ar, use o GitHub Pages (Settings > Pages > branch `main`, pasta `/ (root)`).

## Atenção: versão do Figma Make (`figma-make/`)

Essa versão tem dados que **não foram comprovados** e por isso **não entraram** no `index.html`:
- Estrelas de avaliação "(18)" e nota "4,9"
- "5.555+ seguidores" e "777+ publicações"
- Parcelamento sem juros ("10x de ...")
- Fotos de produtos de banco de imagens (Unsplash), que não são fotos reais da loja

Antes de reaproveitar qualquer um deles, confirmar com o cliente.

## Pendências do `index.html`

- [ ] Dias e horários de funcionamento
- [ ] CNPJ
- [ ] Política de privacidade (obrigatória pela LGPD: o site coleta nome, WhatsApp e e-mail), termos de uso, trocas e devoluções
- [ ] Selos do rodapé: manter só os que a loja realmente tem
- [ ] Preços vindos do Figma: confirmar com o cliente
- [ ] Pagamento é **somente demonstração**: nada é cobrado de verdade
