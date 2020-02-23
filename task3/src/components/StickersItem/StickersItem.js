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
		props.onStickerValueChange({text: e.target.value}, props.sticker.id)
	}

	const getStickerSize = (e) => {
		if(e.target.offsetWidth || e.targetoffsetHeight ) {
			props.onStickerSizeChange({w: e.target.offsetWidth, h: e.target.offsetHeight}, props.sticker.id)
		}
	}

	let prevPosition = { x: 0, y: 0 };

	function getStickerStyle() {
		const { x, y } = props.sticker;
		return {
			...stickerStyle,
			top: y,
			left: x
		};
	}

	function startDrag(e) {
		prevPosition = {
			x: e.clientX,
			y: e.clientY
		};
		document.addEventListener('mousemove', drag);
		document.addEventListener('mouseup', stopDrag);
	}

	function stopDrag(e) {
		document.removeEventListener('mousemove', drag);
		document.removeEventListener('mouseup', stopDrag);
	}

	function drag(e) {
		const { x, y } = props.sticker;

		props.onStickerPositionChange({
			x: x + (e.clientX - prevPosition.x),
			y: y + (e.clientY - prevPosition.y)
		}, props.sticker.id);
	}




	return (
		<CSSTransition in={true} enter={true} exit={true} appear={true} timeout={{ enter: 500,exit: 1500 }} classNames="example" >
		<span className="stickers__item"
			ref={textareaRef}
			style={getStickerStyle()}>
			<div className="stickers__button_wrap" onMouseDown={startDrag}>
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

const stickerStyle = {
	position: 'absolute',
};