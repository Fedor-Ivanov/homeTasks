import React, { useState, useEffect } from 'react'
import StickersField from '../StickersField/StickersField'


function Stickers() {

	const [stickers, setStickers] = useState([]);


	// useEffect(() => {
	// 	function createSticker() {
	// 		setStickers({
	// 			...stickers,
	// 			text: 'lorem',
	// 			x: 100 + 100,
	// 			y: 100 + 100
	// 		})
	// 	}
	// });

	

	const createSticker = (newSticker) => {
		setStickers([
			...stickers,
			{
				id: Date.now(),
				newSticker
			}
			
		])
	}

	return (
		<div>
			<button onClick={createSticker}>add sticker</button>
			<StickersField stickers={stickers} />
		</div>
	)
}

export default Stickers