import React from 'react' ; 
import 'tachyons';
import {budda} from './Budda'
import './BudaCard.css';


const BudaCard =({name })=>{
	console.log(`./dudaPic/${name}.jpg`)
return(
		<div className='tc green pa2 dib ma2 grow bw3 shadow-5'>
			<img  src={require(`./dudaPic/${name}.jpg`)} alt='buda' />
			<div>
				<h2>{name}</h2>
			</div>	

		</div>
	);
}
export default BudaCard;