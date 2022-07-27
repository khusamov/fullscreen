import classNames from 'classnames'
import {ButtonPressedStyle, OutlineStyle, ButtonStyle} from './DirectionalPad.module.scss'

const topButtonIndex = 3    // Y button
const bottomButtonIndex = 0  // A button
const leftButtonIndex = 2  // B button
const rightButtonIndex = 1 // X button

const dummyButton: GamepadButton = {
	pressed: false,
	touched: false,
	value: 0
}

interface IRightDirectionalPadProps {
	gamepad: Gamepad
}

export function RightDirectionalPad({gamepad}: IRightDirectionalPadProps) {
	const topButton = gamepad.buttons[topButtonIndex] || dummyButton
	const bottomButton = gamepad.buttons[bottomButtonIndex] || dummyButton
	const leftButton = gamepad.buttons[leftButtonIndex] || dummyButton
	const rightButton = gamepad.buttons[rightButtonIndex] || dummyButton
	const topButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: topButton.pressed
	})
	const bottomButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: bottomButton.pressed
	})
	const leftButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: leftButton.pressed
	})
	const rightButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: rightButton.pressed
	})
	return (
		<g>
			<circle className={OutlineStyle} id='BOutline' cx='329' cy='160' r='37.5'/>
			<g id='BTop'>
				<path className={topButtonClassName}
					d='M340.669 144.335C343.793 141.21 343.816 135.997 339.868 134.014C339.327 133.743 338.776 133.491 338.215 133.258C335.182 132.002 331.931 131.355 328.648 131.355C325.365 131.355 322.114 132.002 319.081 133.258C318.521 133.491 317.969 133.743 317.429 134.014C313.48 135.997 313.503 141.21 316.627 144.335L322.991 150.698C326.116 153.823 331.181 153.823 334.305 150.698L340.669 144.335Z'
					></path>
			</g>
			<g id='BRight'>
				<path className={rightButtonClassName}
					d='M344.447 171.669C347.571 174.793 352.785 174.816 354.768 170.868C355.039 170.327 355.291 169.776 355.523 169.215C356.78 166.182 357.426 162.931 357.426 159.648C357.426 156.365 356.78 153.114 355.523 150.081C355.291 149.521 355.039 148.969 354.768 148.429C352.785 144.48 347.571 144.503 344.447 147.627L338.083 153.991C334.959 157.116 334.959 162.181 338.083 165.305L344.447 171.669Z'
					></path>
			</g>
			<g id='BBottom'>
				<path className={bottomButtonClassName}
					d='M317.113 175.447C313.989 178.571 313.966 183.785 317.914 185.767C318.455 186.039 319.006 186.291 319.566 186.523C322.6 187.78 325.85 188.426 329.134 188.426C332.417 188.426 335.667 187.78 338.701 186.523C339.261 186.291 339.812 186.039 340.353 185.767C344.301 183.785 344.279 178.571 341.154 175.447L334.79 169.083C331.666 165.959 326.601 165.959 323.477 169.083L317.113 175.447Z'
					></path>
			</g>
			<g id='BLeft'>
				<path className={leftButtonClassName}
					d='M313.335 148.113C310.21 144.989 304.997 144.966 303.014 148.914C302.743 149.455 302.491 150.006 302.258 150.566C301.002 153.6 300.355 156.851 300.355 160.134C300.355 163.417 301.002 166.668 302.258 169.701C302.491 170.261 302.743 170.812 303.014 171.353C304.997 175.301 310.21 175.279 313.335 172.154L319.698 165.79C322.823 162.666 322.823 157.601 319.698 154.477L313.335 148.113Z'
					></path>
			</g>
		</g>
	)
}