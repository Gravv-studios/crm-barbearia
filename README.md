# CRM Studio Clean

Sistema de gestão independente da barbearia: agenda, clientes, comandas, caixa, equipe, comissões, estoque e relatórios. Identidade visual alinhada ao site.

Repositório: https://github.com/Gravv-studios/crm-studio-clean.git

O site institucional permanece em https://clean-studio-blue.vercel.app/ e no repositório https://github.com/Gravv-studios/clean-studio.git. Este repositório contém somente o CRM e seus recursos necessários.

## Começar neste ou em outro computador

Requer Node.js 24 ou superior e Git.

1. Clone este repositório e entre na pasta crm-studio-clean.
2. Execute `npm ci` para instalar exatamente as dependências do lockfile.
3. Execute `npm run dev` e abra http://127.0.0.1:3001/.

O banco local é criado em `.local-crm/studio-clean.sqlite` com exemplos editáveis. Código e dados são separados: clonar o GitHub não transfere clientes nem lançamentos. Para dados, use a exportação em Configurações; a restauração nesta versão exige suporte técnico. Nunca envie o banco ou seus backups ao GitHub.

## Atualizar e enviar alterações

- Faça as alterações nesta pasta, não na pasta do site.
- `npm test`: valida as regras do CRM.
- `npm run build`: valida e compila a interface em dist.
- Revise `git diff` e execute `npm run sync -- "Descrição da atualização"`.
- O comando confere o repositório e a branch main, busca o remoto, testa, compila, cria commit se necessário e envia ao GitHub. Em caso de divergência ou falha, ele para e preserva os arquivos.
- Para trazer alterações já enviadas de outro computador, use `git pull --ff-only` com a árvore de trabalho limpa antes de editar.

Os nomes dev:crm, build:crm e test:crm continuam disponíveis como atalhos compatíveis. O build é apenas da interface; não substitui a API local nem constitui implantação online.

## Servidor local

A API roda no servidor local do Vite e usa SQLite. Acesso vinculado a localhost/127.0.0.1:3001; gravações validam origem e revisão para impedir sobrescrita por outra aba. O banco e arquivos privados não são servidos pelo Vite. Não exponha este servidor de desenvolvimento à internet.

### Módulos implementados

- Visão geral: atendimentos do dia, comandas abertas, clientes, estoque baixo e comissão pendente.
- Agenda: cadastro e remarcação, profissionais habilitados, duração, expediente, bloqueios, conflitos, chegada, atendimento, conclusão, falta e cancelamento.
- Clientes: cadastro, edição, busca, aniversário, origem, preferências, autorização de contato e histórico.
- Comandas: atendimento vinculado ou venda avulsa, serviços e produtos, quantidades, desconto, recebimento, cancelamento e estorno.
- Caixa: abertura, fundo, recebimentos, despesas, suprimento, sangria, separação de Pix/cartão/dinheiro e fechamento com diferença.
- Serviços e equipe: preços, duração, situação, expedientes, dias, serviços habilitados e comissão editáveis.
- Comissões: cálculo sobre serviços pagos após desconto proporcional, repasse e histórico. Produtos não geram comissão. Estorno após repasse é bloqueado para revisão manual.
- Estoque: produtos, custo, preço, mínimo, entradas e saídas com motivo, baixa na venda e devolução no estorno.
- Relacionamento: aniversariantes, clientes sem retorno, histórico de contatos e texto copiável; nenhum envio automático.
- Relatórios: período, receita de comandas pagas, ticket médio, produção por profissional, situação dos atendimentos e CSV.
- Configurações: preferências, intervalo de retorno, histórico de alterações e exportação de backup JSON. Restauração técnica, sem importador na interface.

Preços e regras iniciais são exemplos autorizados pelo usuário e precisam ser conferidos pela loja. Horários usam o fuso local do computador. Caixa registra operações internamente, sem movimentar bancos. Receita não equivale a lucro; não há emissão fiscal. Uma comanda usa um profissional e uma forma de pagamento. O CRM local novo não importa automaticamente os testes do antigo localStorage.

### Próxima publicação em domínio próprio

Aguardar o domínio informado pelo usuário. O CRM não foi publicado. Para operação multiusuário online, implantar servidor de produção, banco persistente, autenticação, perfis de acesso, rotina de backup e HTTPS no projeto próprio. A API deste estágio é middleware do servidor local, não um backend para hospedagem estática.

Trinks, Google e WhatsApp automático dependem de acessos autorizados, definição de provedor e implementação/testes de sincronização. Referência Trinks: https://trinks.readme.io/reference/introducao.
