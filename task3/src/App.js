import React from 'react'
import Stickers from './components/Stickers/Stickers'
import './normalize.css'


export default function App() {
	return (
		<div style={AppStyle}>
			<Stickers />
		</div>
	)
}

const AppStyle = {
	backgroundColor: '#666',
	height: '100vh'
}