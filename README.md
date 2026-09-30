# Studio Clean CRM online

Versão hospedada do CRM, separada do site público e da instalação local.

- Fonte no GitHub: branch codex/online do repositório Gravv-studios/crm-barbearia.
- Hospedagem: Sites, projeto definido em .openai/hosting.json. Não criar outro projeto.
- Acesso privado do proprietário, protegido pelo login ChatGPT e política da plataforma.
- Banco persistente D1, com atualizações atômicas por revisão. Não usar SQLite de disco em produção.
- npm ci, npm run db:generate quando o esquema mudar, npm run build.
- Alterações de esquema devem gerar migrações novas; nunca reescrever migrações já aplicadas.
- O banco online começa com exemplos; dados locais não são enviados automaticamente.
- A publicação usa o fluxo Sites. Push no GitHub preserva o código, mas não publica sozinho.
- Sem rotinas periódicas de sincronização. Ao concluir uma atualização, validar, criar commit em português, enviar ao GitHub e publicar no mesmo projeto Sites.
