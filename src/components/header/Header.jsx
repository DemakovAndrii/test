import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import cl from './header_component.css'

export default function Header({ log }) {

	const [inp, setInp] = useState('')
	const [anim, setAnim] = useState('')

	const azaza = () => setAnim('active')

	useEffect(() => {
		setTimeout(azaza, 5000);
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inp);
	}

	const handleChange = (e) => {
		setInp(e.target.value)
	}

	return (
		<div className='header'>
			<img className='logo' src="/assets/header/logo.png" alt="" />
			<div className='search-bar'>
				<form onSubmit={handleSubmit} action="">
					<img className='search-logo' src="/assets/header/search.svg" alt="" />
					<input onChange={handleChange} value={inp} className='search-input' type="text" placeholder='Search for places' />
				</form>
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
				<div className={`notification-logo ${anim}`}></div>
			</div>

			<img className='person' src={log ? "assets/header/person.png" : "assets/header/vopros.svg"} alt="" />
		</div>
	)
}
