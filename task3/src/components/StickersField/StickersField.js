import React from 'react'
import StickersItem from '../StickersItem/StickersItem';

export default function StickersField({stickers, deleteSticker, onStickerValueChange, stickersText}) {

	const StickersFieldStyle = {
		backgroundColor: "#666",
		width: "100%",
		overflowY: "auto",
		height: "300px",
	}

	return (
		<div style={StickersFieldStyle}>

			{stickers.map((item) => 
				<StickersItem
					sticker={item}
					key={item.id}
					deleteSticker={deleteSticker}
					onStickerValueChange={onStickerValueChange}
				/>
			)}
			
		</div>
	)
}
