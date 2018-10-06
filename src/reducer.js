import {CHANGE_SEARCH_FIELD} from './constant'

const intialState={
	searchField:''
	
}
export const searchBuddha=(state=intialState, action={})=>{
	console.log('state:',state)
	console.log('state2:',action.payload)
	console.log('state3:',action.type)
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({},state,{searchField:action.payload})  
			// ==(...state,{searchField:action.payload})  
		default:
			return state ;
	}
}