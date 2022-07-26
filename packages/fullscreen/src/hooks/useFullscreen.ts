import {useRef} from 'react'
import useBooleanState from 'use-boolean-state'

const defaultFullscreenOptions: FullscreenOptions = {
	navigationUI: 'hide'
}

export function useFullscreen(options: FullscreenOptions = defaultFullscreenOptions) {
	const fullscreenElementRef = useRef<HTMLDivElement>(null)

	const [isFullscreen, setFullscreen, clearFullscreen] = (
		useBooleanState(
			document.fullscreenElement !== null &&
			document.fullscreenElement !== fullscreenElementRef.current
		)
	)

	const toggleFullScreen = (
		async () => {
			if (document.fullscreenElement) {
				await document.exitFullscreen()
				clearFullscreen()
			} else {
				if (fullscreenElementRef.current) {
					await fullscreenElementRef.current.requestFullscreen(options)
					setFullscreen()
				}
			}
		}
	)

	return {
		fullscreenElementRef,
		isFullscreen,
		toggleFullScreen
	}
}