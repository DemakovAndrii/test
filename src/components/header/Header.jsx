import React from 'react'
import cl from './header_component.css'

export default function Header() {
	return (
		<div className='header'>
			<img className='logo' src="/assets/header/logo.png" alt="" />
			<div className='search-bar'>
				<img className='search-logo' src="/assets/header/search.svg" alt="" />
				<input className='search-input' type="text" placeholder='Search for places' />
			</div>
			<div className='switch'>
				<img src="assets/header/switch.svg" alt="" />
			</div>
			<div className='location'>
				<img className='location-logo' src="/assets/header/location.svg" alt="" />
				<p className='location-city'>New York/ Dc</p>
			</div>
			<div className='notification'>
				<img src="/assets/header/notification.svg" alt="" />
			</div>
			<img className='person' src="assets/header/person.png" alt="" />
		</div>
	)
}
