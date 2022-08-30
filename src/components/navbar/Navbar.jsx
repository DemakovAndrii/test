import React from 'react'
import cl from './navbar_component.css'
import { links } from './navbar-data.json'

export default function Navbar() {

	const aa = links

	return (
		<div className='navbar'>
			{aa.map((l, i) =>
				<div className='element' key={i}>
					{l}
				</div>)}
			<div className='element'>Sing Out</div>
		</div>
	)
}