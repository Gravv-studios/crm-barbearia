# CRM Studio Clean — instruções do projeto

## Repositório e escopo
- Este é o projeto independente do CRM: https://github.com/Gravv-studios/crm-studio-clean.git.
- Pasta local: C:/Users/Marcos/Documents/workspace02/crm-studio-clean.
- Alterações do CRM devem ser feitas aqui, nunca na pasta studio-clean.
- O site continua em https://clean-studio-blue.vercel.app/ e no repositório clean-studio.git.
- Manter identidade visual marfim, dourado e grafite do Studio Clean.

## Salvamento e sincronização
- Ao concluir uma alteração solicitada, revisar o diff e executar npm run sync -- "Descrição objetiva em português".
- O comando executa testes e build, cria commit se houver mudanças e envia main para o origin deste CRM.
- Não criar commits vazios, não usar force push, não reescrever histórico nem sobrescrever alterações remotas.
- Se houver divergência, preservar os dois lados e resolver antes de enviar.
- Não incluir mudanças de terceiros sem relação com o pedido.
- Nunca versionar banco local, backups, dados de clientes, credenciais, .env, node_modules, dist ou capturas temporárias.
- Se o push falhar, preservar o commit e informar; não afirmar sincronização concluída.
- Não criar cron, automações periódicas ou observadores para sincronização.

## Execução e publicação
- npm run dev inicia exclusivamente em http://127.0.0.1:3001/.
- Banco SQLite: .local-crm/studio-clean.sqlite. Não apagar nem substituir dados existentes.
- O CRM continua local até o usuário informar o domínio e autorizar sua hospedagem independente.
- Push no GitHub é salvamento de código, não publicação operacional.
- Não conectar este CRM ao projeto Vercel do site nem ao domínio atual do site.
- Antes de exposição online: servidor de produção, persistência, autenticação, permissões, backup e HTTPS.
- Integrações Trinks, Google e WhatsApp ainda não estão ativas; não simular conexão real.
