import React, { useEffect, useRef } from 'react'
import './StickersItem.css'


export default function StickersItem(props) {

	const textareaRef = useRef()

	const onDeleteButtonClick = (e) => {
		e.stopPropagation();
		props.deleteSticker(props.sticker.id)
	}

	const onTextAreaChange = (e) => {
		props.onStickerValueChange(e.target.value, props.sticker.id)
	}

	useEffect(() => {
		console.log("x: " + textareaRef.current.offsetLeft);
		console.log("y: " + textareaRef.current.offsetTop);
	}, [props.sticker])


	return (
		<span className="stickers__item"
			ref={textareaRef}
		>
			<button
				className="stickers__button"
				onClick={onDeleteButtonClick}
			>
				
			</button>
			<textarea
				className="stickers__textarea"
				placeholder='type some note'
				onChange={onTextAreaChange}
				value={props.sticker.text}
			>
			</textarea>
		</span>
	)
}


