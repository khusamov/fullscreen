import {ApplicationStyle} from './Application.module.scss'
import {useRef} from 'react'

export function Application() {
	const divRef = useRef<HTMLDivElement>(null)
	const toggleFullScreen = async () => {
		if (document.fullscreenElement) {
			await document.exitFullscreen()
		} else {
			if (divRef.current) {
				await divRef.current.requestFullscreen({navigationUI: 'hide'})
			}
		}
	}
	const onClick = async () => {
		await toggleFullScreen()
	}
	return (
		<div ref={divRef} className={ApplicationStyle}>
			<div>Тестирование Fullscreen API</div>
			<div>Fullscreen Enabled = {document.fullscreenEnabled ? 'true' : 'false'}</div>
			<div><button onClick={onClick}>Fullscreen</button></div>
		</div>
	)
}