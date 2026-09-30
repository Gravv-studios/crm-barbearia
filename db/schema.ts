import {sqliteTable,integer,text} from 'drizzle-orm/sqlite-core';
export const crmState=sqliteTable('crm_state',{id:integer('id').primaryKey(),revision:integer('revision').notNull(),data:text('data').notNull()});
