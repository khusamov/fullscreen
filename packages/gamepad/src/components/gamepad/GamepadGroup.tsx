import {GamepadImage} from './GamepadImage'
import {GamepadGroupStyle, ItemStyle, TitleStyle} from './GamepadGroup.module.scss'

export interface IGamepadGroupProps {
	gamepads: Gamepad[]
}

export function GamepadGroup({gamepads}: IGamepadGroupProps) {
	return (
		<div className={GamepadGroupStyle}>
			{gamepads.map(
				gamepad => (
					<div className={ItemStyle} key={gamepad.index}>
						<div className={TitleStyle}>Индекс: {gamepad.index}</div>
						<GamepadImage gamepad={gamepad}/>
					</div>
				)
			)}
		</div>
	)
}