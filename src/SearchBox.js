import React from 'react'

const SearchBox = ({searchChange})=>{
	return(
		<div className='pa2 '>
			<input  
				className="pa2 ba b--blue "
				type = "search" placeholder='菩薩'
				onChange={searchChange}

				/>
		</div>	
		);
}	
export default SearchBox