# Instruções do CRM online

Este checkout é a versão online do CRM. Usar Sites hosting com o project_id existente em .openai/hosting.json; preservar audiência privada. Nunca trocar o domínio/projeto do site institucional.

Ao concluir alterações: revisar diff, validar tipos e build, criar commit em português e enviar HEAD à branch codex/online do remote github (https://github.com/Gravv-studios/crm-barbearia.git), sem force push. Usar o fluxo Sites para publicar o mesmo código, conforme solicitação de manter o CRM online. Não criar rotinas periódicas, cron ou sincronização a cada 10 minutos.

Não incluir segredos, banco de dados, dados pessoais, node_modules ou dist no Git. Não migrar dados locais sem pedido. Preservar os 12 módulos e a identidade visual. API exige usuário autenticado; gravações validam origem e revisão. Respeitar a política privada da hospedagem; não tornar dados públicos.
