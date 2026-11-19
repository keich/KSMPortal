import type { IItem } from "@/types/IItem.ts"
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

const host = import.meta.env.VITE_API_HOST

dayjs.extend(relativeTime)


function getItems(direct: string, id: String, parametrs: string[]): Promise<IItem[]> {
	let url = new URL(host + '/item/' + id + direct);
	parametrs.forEach(param => {
		url.searchParams.append('property', param);
	})
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

function getChildren(id: String, parametrs: string[]): Promise<IItem[]> {
	return getItems('/children', id, parametrs)
}

function getParents(id: String, parametrs: string[]): Promise<IItem[]> {
	return getItems('/parents', id, parametrs)
}

export default {
	getChildren, getParents
}