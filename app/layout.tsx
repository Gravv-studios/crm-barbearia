import type {Metadata} from 'next';
import '../src/styles/index.css';
export const metadata:Metadata={title:'Studio Clean · CRM',description:'Gestão privada da barbearia',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"/></head><body>{children}</body></html>;}
