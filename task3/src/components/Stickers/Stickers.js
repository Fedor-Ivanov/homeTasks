import React, { useEffect, useState } from 'react';
import StickersField from '../StickersField/StickersField';


function Stickers() {


	const [stickers, setStickers] = useState(
		JSON.parse(localStorage.getItem('stickersStorage')) ? JSON.parse(localStorage.getItem('stickersStorage')) : []
	);


	const createSticker = () => {
		setStickers([
			...stickers,
			{
				id: Date.now(),
				text: '',
				// x: '', // тут должно быть значение x при отрисовке элемента
				// y: '' // тут должно быть значение y при отрисовке элемента
			}
		])
	}


	const check = () => {
		console.log(stickers)
	}


	const deleteSticker = (id) => {
		const newStickers = stickers.filter((item) => {
			return item.id !== id;
		})
		setStickers(newStickers)
	}


	const stickersIds = stickers.map((elem) => {
		return elem.id;
	})


	const onStickerValueChange = (data, id) => {
		const editedStickers = stickers.map(element => {	
			if( stickersIds.includes(id) ) {
				if (element.id === id) {
					element.text = data;
				}
			return element;
			}
		})
		setStickers(editedStickers)
	}
	

	useEffect(() => {
		localStorage.setItem("stickersStorage", JSON.stringify(stickers));
	}, [stickers])


	return (
		<div>
			<button onClick={check}>check sticker</button>
			<button onClick={createSticker}>add sticker</button>
			<StickersField
				stickers={stickers}
				deleteSticker={deleteSticker}
				onStickerValueChange={onStickerValueChange}
			/>
		</div>
	)
}

export default Stickers