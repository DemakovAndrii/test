import React, { useState } from 'react'

export default function SwiperItem({ img, text, loc, rate, imghover }) {

	const [hover, setHover] = useState(1)

	const pidor = () => setHover(!hover)

	return (
		<>
			<img className='imaga'
				onMouseEnter={pidor}
				onMouseLeave={pidor}
				src={hover ? img : imghover} alt={text} />
			<h1>{text}</h1>
			<div className='hueta'>
				<img src="/assets/main/location.svg" alt="" />
				<span>{loc}</span>
				<img src="/assets/main/star.svg" alt="" />
				<span>{rate}</span>
			</div>
		</>
	)
}
