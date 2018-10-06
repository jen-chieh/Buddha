import React from 'react' ; 
import 'tachyons';
import {budda} from './Budda'
import './BudaCard.css';
import ReactTooltip from 'react-tooltip'

const BudaCard =(props)=>{
	const{name , speak}= props;
	console.log(`./dudaPic/${name}.jpg`)
return(
		<div data-tip data-for={name} className=' grow tc pa2 dib ma2 bw3 shadow-5 '>
			<img  src={require(`./dudaPic/${name}.jpg`)} alt='buda' />
			<div >
				<h2>{name}</h2>
			</div>	

			<ReactTooltip id={name}  type="info" effect="solid"  aria-haspopup='true' place='top' > 
				 <ul>
				  	<li>心咒：{speak}</li>
				   <li>種子字:</li>
				   <li>手印:</li>
				 </ul>
				</ReactTooltip>	
		</div>

	);
}
export default BudaCard;