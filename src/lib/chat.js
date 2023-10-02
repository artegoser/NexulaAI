import axios from 'axios';
import { env } from '$env/dynamic/public';

/**
 * Messages.
 * @typedef {{content: string, role: string, time: number}} Messages
 */

/** @param {Messages[]} messages
 * @param {string} model
 */
export async function getResponse(messages, model) {
	try {
		const response = await axios.request({
			method: 'POST',
			url: env.PUBLIC_NEXULAPI + `/chat`,
			headers: {
				'content-type': 'application/json'
			},
			data: {
				model,
				messages
			}
		});

		return response.data.content;
	} catch (error) {
		console.log(error);
		return 'Error';
	}
}

export async function getModels() {
	try {
		const response = await axios.get(env.PUBLIC_NEXULAPI + `/chat/models/list`);

		return response.data;
	} catch (error) {
		return [];
	}
}
