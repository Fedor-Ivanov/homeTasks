import React from 'react'
import StickersItem from '../StickersItem/StickersItem';
import './StickersField.css'

export default function StickersField({ stickers, deleteSticker, onStickerValueChange, onStickerSizeChange, onStickerPositionChange }) {

	return (
		<div className="stickers__field">

			{stickers.map((item) => 
			
				<StickersItem
					sticker={item}
					key={item.id}
					deleteSticker={deleteSticker}
					onStickerValueChange={onStickerValueChange}
					onStickerSizeChange={onStickerSizeChange}
					onStickerPositionChange={onStickerPositionChange}
				/>
			
			)}
			
		</div>
	)
}
