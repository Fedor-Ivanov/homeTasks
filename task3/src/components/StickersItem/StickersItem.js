import React, { useEffect, useRef } from 'react'
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

	const qwwwww = (e) => {
		props.onStickerSizeChange(e.target.offsetWidth, e.target.offsetHeight)
	}

	useEffect(() => {
		console.log("x: " + textareaRef.current.offsetLeft);
		console.log("y: " + textareaRef.current.offsetTop);
		console.log("width: " + textareaRef.current.offsetWidth);
		console.log("height: " + textareaRef.current.offsetHeight);
	}, [props.sticker])


	return (
		<CSSTransition in={true} enter={true} exit={true} appear={true} timeout={{ enter: 500,exit: 1500 }} classNames="example" >
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
				style={{width: props.sticker.w, height: props.sticker.h}}
				onFocus={qwwwww}
			>
			</textarea>
		</span>
		</CSSTransition>
	)
}


