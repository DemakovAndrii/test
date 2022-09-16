import React, { useState } from 'react'
import cl from './rightBar_component.css'
import data from '../../data/rightbar.json'

export default function RightBar() {

	const [card, setCard] = useState(0)
	const [place, setPlace] = useState(false)

	const openCard = (e) => {
		setCard(e.target.getAttribute('index'))
		console.log(e.target.getAttribute('index'));
	}

	const saveLoc = () => {
		setPlace(!place)
	}


	return (
		<div className='rightBar'>
			{data.map(({ img, name, loc, coast }, index) => {
				return (
					<div className={`card ${card == index ? 'active' : ''}`}
						key={index}
						index={index}
						onClick={openCard}>

						<img className={`img ${card == index ? 'active' : ''}`}
							src={img} alt="" />

						<div className={`info ${card == index ? 'active' : ''}`}>
							<div>
								<div className={`name ${card == index ? 'active' : ''}`}>
									{name}
								</div>
								<div className={`loc ${card == index ? 'active' : ''}`}>
									<img src="/assets/rightbar/location.svg" alt="" />
									{loc}
								</div>
							</div>

							<div className='box' onClick={saveLoc}>
								<div className={`box-logo ${place ? 'active' : ''}`}></div>
							</div>
						</div>

						<div className={`booking ${card == index ? 'active' : ''}`}>
							<div>
								<span>per/person</span>
								<div className={`coast ${card == index ? 'active' : ''}`}>{coast}</div>
							</div>
							<button className={`button ${card == index ? 'active' : ''}`}>Book Travel</button>
						</div>

					</div>
				)
			})}
		</div >
	)
}