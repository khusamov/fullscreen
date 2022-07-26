import {useFullscreen} from '../../hooks/useFullscreen'
import {ApplicationStyle} from './Application.module.scss'

export function Application() {
	const {fullscreenElementRef, isFullscreen, toggleFullScreen} = useFullscreen()
	const onClick = async () => toggleFullScreen()
	return (
		<div ref={fullscreenElementRef} className={ApplicationStyle}>
			<div>
				<h1>Тестирование Fullscreen API</h1>
				{
					document.fullscreenEnabled
						? (
							<div>
								<button onClick={onClick}>
									{isFullscreen ? 'Отключить' : 'Включить'}
									Fullscreen
								</button>
							</div>
						)
						: (
							<div>
								Fullscreen API в данном браузере не доступен.
							</div>
						)
				}
			</div>
		</div>
	)
}