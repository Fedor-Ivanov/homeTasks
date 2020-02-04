import React from 'react'

export default function StickersItem(props) {

	const StickersItemStyle = {
		width: "200px",
		height: "200px",
		display: "inline-block",
		margin: "0px 20px 10px"
	}
	
	const StickersItemButtonStyle = {
		marginLeft: "auto",
		display: "block"
	}
	
	const StickersItemTextAreaStyle = {
		width: "auto",
		height: "auto",
	}

	const onDeleteButtonClick = (e) => {
		e.stopPropagation();
		props.deleteSticker(props.sticker.id)
	}

	const onTextAreaChange = () => {
		props.onStickerValueChange(props.sticker)
	}

	return (
		<span style={StickersItemStyle}>
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
			>
				
			</textarea>
		</span>
	)
}

