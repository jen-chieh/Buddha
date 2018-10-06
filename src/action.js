import {CHANGE_SEARCH_FIELD} from './constant'
export const setSearchField=(text)=>{
	console.log('set',text);
	return {
		type:CHANGE_SEARCH_FIELD,
		payload: text,
		tes1:"test"
	}
}