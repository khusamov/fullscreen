import {LeftBumperButton} from './LeftBumperButton'
import {LeftDirectionalPad} from './LeftDirectionalPad'
import {LeftTriggerButton} from './LeftTriggerButton'
import {MetaButton} from './MetaButton'
import {Outline} from './Outline'
import {RightBumperButton} from './RightBumperButton'
import {RightDirectionalPad} from './RightDirectionalPad'
import {RightTriggerButton} from './RightTriggerButton'
import {Stick} from './Stick'

const backButtonIndex = 8
const startButtonIndex = 9
const leftStickButtonIndex = 10
const rightStickButtonIndex = 11
const homeButtonIndex = 16
const turboButtonIndex = 17

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
			<LeftDirectionalPad gamepad={gamepad}/>
			<RightDirectionalPad gamepad={gamepad}/>
			<MetaButton name='back' x={180} button={gamepad.buttons[backButtonIndex] || dummyButton}/>
			<MetaButton name='start' x={264} button={gamepad.buttons[startButtonIndex] || dummyButton}/>
			<MetaButton name='home' x={222} y={130} radius={15} button={gamepad.buttons[homeButtonIndex] || dummyButton}/>
			<MetaButton name='turbo' x={222} y={180} radius={8} button={gamepad.buttons[turboButtonIndex] || dummyButton}/>
			<LeftBumperButton/>
			<RightBumperButton/>
			<LeftTriggerButton/>
			<RightTriggerButton/>
		</svg>
	)
}