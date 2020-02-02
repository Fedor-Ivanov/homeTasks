import React from 'react'

export default function StickersItem(props) {

	// console.log(props);

	return (
		<span>
			<input type='textarea' placeholder={props.sticker.id}></input>
		</span>
	)
}
