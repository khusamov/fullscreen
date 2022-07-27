import {LeftBumperButton} from './LeftBumperButton'
import {LeftDirectionalPad} from './LeftDirectionalPad'
import {LeftTriggerButton} from './LeftTriggerButton'
import {LeftMetaButton} from './LeftMetaButton'
import {Outline} from './Outline'
import {RightBumperButton} from './RightBumperButton'
import {RightDirectionalPad} from './RightDirectionalPad'
import {RightTriggerButton} from './RightTriggerButton'
import {RightMetaButton} from './RightMetaButton'
import {Stick} from './Stick'

const leftStickButtonIndex = 10
const rightStickButtonIndex = 11

export interface IGamepadProps {
	gamepad: Gamepad
}

const dummyButton: GamepadButton = {
	pressed: false,
	touched: false,
	value: 0
}

export function GamepadImage({gamepad}: IGamepadProps) {
	const rightStickAxes: [number, number] = [gamepad.axes[2] || 0, gamepad.axes[3] || 0]
	const leftStickAxes: [number, number] = [gamepad.axes[0] || 0, gamepad.axes[1] || 0]
	return (
		<svg width='300' viewBox='0 0 441 383' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<Outline/>
			<Stick name='right' button={gamepad.buttons[rightStickButtonIndex] || dummyButton} axes={rightStickAxes} x={278} y={238}/>
			<Stick name='left' button={gamepad.buttons[leftStickButtonIndex] || dummyButton} axes={leftStickAxes} x={113} y={160}/>
			<LeftDirectionalPad/>
			<RightDirectionalPad/>
			<LeftMetaButton/>
			<RightMetaButton/>
			<LeftBumperButton/>
			<RightBumperButton/>
			<LeftTriggerButton/>
			<RightTriggerButton/>
		</svg>
	)
}