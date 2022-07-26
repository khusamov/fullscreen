import {useEffect, useState} from 'react'
import {useRequestAnimationFrame} from '../../hooks/useRequestAnimationFrame'
import {ApplicationStyle} from './Application.module.scss'

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
			<div>
				{!hasGamepads && 'Подключите геймпад и нажмите на нем любую кнопку...'}
				{hasGamepads && (
					<table>
						<thead>
							<tr>
								<th>#</th>
								<th>id</th>
								<th>timestamp</th>
								<th>axes</th>
							</tr>
						</thead>
						<tbody>
						{gamepads.map((gamepad, index) => (
							<tr key={index}>
								<td>{index}</td>
								<td>{gamepad?.id}</td>
								<td>{gamepad?.timestamp.toFixed()}</td>
								<td>
									{gamepad && <input type='range' readOnly value={gamepad?.axes[0]} min={-1} max={1} step={0.01}/>}
									{gamepad && <input type='range' readOnly value={gamepad?.axes[1]} min={-1} max={1} step={0.01}/>}
									{gamepad && <input type='range' readOnly value={gamepad?.axes[2]} min={-1} max={1} step={0.01}/>}
									{gamepad && <input type='range' readOnly value={gamepad?.axes[3]} min={-1} max={1} step={0.01}/>}
								</td>
							</tr>
						))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	)
}