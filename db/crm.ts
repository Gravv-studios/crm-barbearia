import {env} from 'cloudflare:workers';
import {initialState,applyAction} from '../src/crm/model.js';
export async function readState(){
 const db=env.DB;if(!db)throw new Error('Banco indisponível.');
 const session=db.withSession('first-primary');
 const initial=initialState();
 await session.prepare('INSERT OR IGNORE INTO crm_state(id,revision,data) VALUES(1,0,?)').bind(JSON.stringify(initial)).run();
 const row=await session.prepare('SELECT data FROM crm_state WHERE id=1').first<{data:string}>();
 if(!row)throw new Error('Banco indisponível.');return JSON.parse(row.data);
}
export async function changeState(action:Record<string,unknown>){
 const current=await readState();if(action.revision!==current.revision)return null;
 const next=applyAction(current,action,()=>crypto.randomUUID());
 const result=await env.DB!.prepare('UPDATE crm_state SET revision=?,data=? WHERE id=1 AND revision=?').bind(next.revision,JSON.stringify(next),current.revision).run();
 return result.meta.changes===1?next:null;
}
