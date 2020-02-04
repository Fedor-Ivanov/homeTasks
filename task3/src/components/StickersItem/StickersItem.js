import React, { useEffect, useRef } from 'react'

export default function StickersItem(props) {

	const StickersItemStyle = {
		display: "inline-block",
		margin: "10px 20px 10px"
	}
	
	const StickersItemButtonStyle = {
		marginLeft: "auto",
		display: "block"
	}
	
	const StickersItemTextAreaStyle = {
		width: "auto",
		height: "auto",
	}

	const textareaRef = useRef()

	const onDeleteButtonClick = (e) => {
		e.stopPropagation();
		props.deleteSticker(props.sticker.id)
	}

	const onTextAreaChange = (e) => {
		props.onStickerValueChange(e.target.value, props.sticker.id)
	}

	// props.setStickers([
	// 	textareaRef.current.offsetLeft
	// ])

	useEffect(() => {
		console.log("x: " + textareaRef.current.offsetLeft);
		console.log("y: " + textareaRef.current.offsetTop);
	}, [props.sticker])


	return (
		<span style={StickersItemStyle}
				ref={textareaRef}
		>
			<button
				style={StickersItemButtonStyle}
				onClick={onDeleteButtonClick}
			>
				delete
			</button>
			<textarea
				
				style={StickersItemTextAreaStyle}
				placeholder={props.sticker.id}
				onChange={onTextAreaChange}
				// onScroll={props.getStickerX(textareaRef.current.offsetLeft)}
			>
				
			</textarea>
		</span>
	)
}


