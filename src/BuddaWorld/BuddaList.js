import React from 'react'
import {budda} from'./Budda'
import BudaCard from './BudaCard'
const BuddaList = ({budda})=>{
// if(true){
// 	throw new Error("noooo") 
// }	
	const BuddaArray = budda.map((budd ,i) =>{
		console.log("this is ",budd)
		return (	
			<BudaCard 
			key ={i} 
			name={budd.name}
			speak={budd.speak}
			/> 
		);	
	});
return(
	<div>
	{BuddaArray }
	</div>
	);

}
export default BuddaList