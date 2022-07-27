import {useEffect, useState} from 'react'
import {useRequestAnimationFrame} from '../../hooks/useRequestAnimationFrame'
import {GamepadGroup} from '../gamepad/GamepadGroup'
import {ApplicationStyle, ConnectGamepadMessage} from './Application.module.scss'

function isGamepad(gamepad: Gamepad | null): gamepad is Gamepad {
	return gamepad !== null
}

export function Application() {
	useEffect(() => {
		const onGamepadConnected = (event: GamepadEvent) => {
			console.log('gamepad connected', event)
		}
		const onGamepadDisconnected = (event: GamepadEvent) => {
			console.log('gamepad disconnected', event)
		}
		window.addEventListener('gamepadconnected', onGamepadConnected)
		window.addEventListener('gamepaddisconnected', onGamepadDisconnected)
		return () => {
			window.removeEventListener('gamepadconnected', onGamepadConnected)
			window.removeEventListener('gamepaddisconnected', onGamepadDisconnected)
		}
	}, [])
	const [gamepads, updateGamepads] = useState<(Gamepad | null)[]>([])
	const hasGamepads = gamepads.filter(gamepad => gamepad).length > 0
	useRequestAnimationFrame(() => {
		updateGamepads(navigator.getGamepads())
	})
	return (
		<div className={ApplicationStyle}>
			{!hasGamepads && (
				<div className={ConnectGamepadMessage}>
					<div>Подключите геймпад и нажмите на нем любую кнопку...</div>
				</div>
			)}
			{hasGamepads && (
				<GamepadGroup gamepads={gamepads.filter(isGamepad)}/>
			)}
		</div>
	)
}