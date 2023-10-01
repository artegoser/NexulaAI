import Dexie from 'dexie';

class nexulaDb extends Dexie {
	constructor() {
		super('nexulaai');
		this.version(1).stores({
			chats: '++id, name',
			prompts: '++id, name, text',
			chat_messages: '++id, chat_id, text, role, time'
		});

		this.chats = this.table('chats');
		this.prompts = this.table('prompts');
		this.chat_messages = this.table('chat_messages');
	}
}

export const db = new nexulaDb();
