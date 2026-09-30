import CrmApp from '../src/crm/CrmApp';
import {requireChatGPTUser} from './chatgpt-auth';
export const dynamic='force-dynamic';
export default async function Home(){await requireChatGPTUser('/');return <CrmApp/>;}
