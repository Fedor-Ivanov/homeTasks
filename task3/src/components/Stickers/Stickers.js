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
				x: getStickerX, // тут должно быть значение x при отрисовке элемента
				y: '' // тут должно быть значение y при отрисовке элемента
			
			}
		])

		console.log('create elem');
		
	}

	const getStickerX = (value) => {

		console.log(value);

		return value;
	}

	// useEffect(() => {



	// 	console.log(stickersXPosition);


	// }, [createSticker])

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

	return (
		<div>
			<button onClick={check}>check sticker</button>
			<button onClick={createSticker}>add sticker</button>
			<StickersField
				stickers={stickers}
				deleteSticker={deleteSticker}
				onStickerValueChange={onStickerValueChange}
				// getStickerX={getStickerX}
			/>
		</div>
	)
}

export default Stickers