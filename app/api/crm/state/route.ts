import {getChatGPTUser} from '../../../chatgpt-auth';
import {readState} from '../../../../db/crm';
export const dynamic='force-dynamic';
export async function GET(){if(!await getChatGPTUser())return Response.json({error:'Entre com sua conta para acessar.'},{status:401});try{return Response.json(await readState(),{headers:{'Cache-Control':'no-store'}});}catch{return Response.json({error:'Banco indisponível. Tente novamente.'},{status:503});}}
