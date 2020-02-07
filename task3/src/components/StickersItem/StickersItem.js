import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group';

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

	const getStickerSize = (e) => {
		if(e.target.offsetWidth || e.targetoffsetHeight ) {
			props.onStickerSizeChange(e.target, props.sticker.id)
		}
		
	}


	return (
		<CSSTransition in={true} enter={true} exit={true} appear={true} timeout={{ enter: 500,exit: 1500 }} classNames="example" >
		<span className="stickers__item"
			draggable="true"
			ref={textareaRef}
			// style={{
			// 	position: "absolute",
			// 	top: props.sticker.y,
			// 	left: props.sticker.x
			// }}
			>
			<div className="stickers__button_wrap">
				<button
				className="stickers__button"
				onClick={onDeleteButtonClick}>
				</button>
			</div>
			
			<textarea
				className="stickers__textarea"
				placeholder='type some note'
				onChange={onTextAreaChange}
				value={props.sticker.text}
				style={{width: props.sticker.w, height: props.sticker.h}}
				onMouseUp={getStickerSize}>
			</textarea>
		</span>
		</CSSTransition>
	)
}