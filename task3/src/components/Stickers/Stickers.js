import React, { useEffect, useState } from 'react';
import StickersField from '../StickersField/StickersField';
import './Stickers.css'


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
			}
		])
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
		setStickers([...stickers],{...editedStickers})
	}

	const onStickerSizeChange = (item, id) => {

		const changedSizeStickers = stickers.map(element => {	
			if( stickersIds.includes(id) ) {
				if (element.id === id) {
					element.w = item.style.width;
					element.h = item.style.height;
				}
			return element;
			}
		})
		setStickers([...stickers],{...changedSizeStickers})

	}
	

	useEffect(() => {
		localStorage.setItem("stickersStorage", JSON.stringify(stickers));
	}, [stickers])


	return (
		<div>
			<div className="stickers__button-wrap">
				<button className="stickers__button_create" onClick={createSticker}></button>
			</div>
			<StickersField
				stickers={stickers}
				deleteSticker={deleteSticker}
				onStickerValueChange={onStickerValueChange}
				onStickerSizeChange={onStickerSizeChange}
			/>
		</div>
	)
}

export default Stickers