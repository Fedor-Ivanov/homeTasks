import React, { useState, useEffect } from 'react'
import StickersItem from '../StickersItem/StickersItem';

export default function StickersField({stickers}) {

	return (
		<div style={StickersFieldStyle}>

			{stickers.map((item) => 
				<StickersItem sticker={item} key={item.id} />
			)}
			
		</div>
	)
}

const StickersFieldStyle = {
	backgroundColor: "#666",
	width: "100%",
	height: "300px"
}