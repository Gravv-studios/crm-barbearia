import {getChatGPTUser} from '../../../chatgpt-auth';
import {changeState} from '../../../../db/crm';
export const dynamic='force-dynamic';
export async function POST(request:Request){
 if(!await getChatGPTUser())return Response.json({error:'Entre com sua conta para acessar.'},{status:401});
 if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Origem não autorizada.'},{status:403});
 if(!request.headers.get('content-type')?.startsWith('application/json'))return Response.json({error:'Formato inválido.'},{status:415});
 try{const text=await request.text();if(text.length>100000)return Response.json({error:'Solicitação muito grande.'},{status:413});const next=await changeState(JSON.parse(text));if(!next)return Response.json({error:'Os dados mudaram em outra aba. Confira e tente novamente.'},{status:409});return Response.json(next,{headers:{'Cache-Control':'no-store'}});}catch(e){return Response.json({error:e instanceof Error?e.message:'Não foi possível salvar.'},{status:400});}
}
