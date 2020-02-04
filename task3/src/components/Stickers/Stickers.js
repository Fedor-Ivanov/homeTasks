import React, { useState } from 'react'
import StickersField from '../StickersField/StickersField'


function Stickers() {

	const [stickers, setStickers] = useState([]); // говорим о том что "stickers" у нас будет массивом

	const createSticker = () => {

		// при добавление мы берем то, что уже записано в нашем массиве "stickers"

		setStickers([

			...stickers, // при добавление мы берем то, что уже записано в нашем массиве "stickers"

			{ // и указываем что каждый новый элемент будет иметь эти свойства

				id: Date.now(), // при создании сразу указываем для элемента id
				text: '', // тут будет значение из textarea, по умолчанию она пустое, пока пользователь его не заполнит
				x: '', // тут должно быть значение x при отрисовке элемента
				y: '' // тут должно быть значение y при отрисовке элемента
			
			}
		])
	}


	// просто тестовая функия чтобы было удобно просмотреть состояние "stickers"
	const check = () => {
		console.log(stickers)
	}

	const deleteSticker = (id) => {
		const newStickers = stickers.filter((item) => {
			return item.id !== id;
		})
		setStickers(newStickers)
	}

	// огромная проблема с этой функцией, не могу понять как привязать value полученое из textarea к соответствующему элементу из 'stickers' и все это перезаписать в тот же 'stickers'
	const onStickerValueChange = (item) => {

		const stickersIds = stickers.map((elem) => {
			return elem.id;
		})

		console.log(stickersIds)

		if( stickersIds.includes(item.id) ) {

			console.log(item);

			const editedStickers = stickers.map(element => {
				if (element.id === item.id) {
					element.id = item.id;
					element.text = item.value;
					// element.x = item.x;
					// element.y = item.y;
				}
				return item;
			})

			setStickers(editedStickers)

		}

		// if (item.id === stickers.id) {
		// 	console.log(item.id)
		// }

		// const stickersData = stickers.map((item) => {
		// 	item.text = data;
		// 	return item;
		// })
		
		// setStickers([
		// 	...stickers,
		// ])
	}

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