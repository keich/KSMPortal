import type { IItem } from "@/types/IItem.ts"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

const host = import.meta.env.VITE_API_HOST

dayjs.extend(relativeTime)


function getChildren(id: String, parametrs: string[]): Promise<IItem[]> {
	let url = new URL(host + '/item/' + id + '/children');
	parametrs.forEach(param => {
		url.searchParams.append('property', param);
	})
	console.log(url)
	return fetch(url)
			.then(response => {
				if(!response.ok){
					throw new Error('HTTP status ' + response.status)
				}
				return response.json()
			})
			.then(json => {
				return json as IItem[];
			})
}

export default {
	getChildren
}