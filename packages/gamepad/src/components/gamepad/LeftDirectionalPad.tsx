import classNames from 'classnames'
import {OutlineStyle, ButtonPressedStyle, ButtonStyle} from './DirectionalPad.module.scss'

const upButtonIndex = 12
const downButtonIndex = 13
const leftButtonIndex = 14
const rightButtonIndex = 15

const dummyButton: GamepadButton = {
	pressed: false,
	touched: false,
	value: 0
}

interface ILeftDirectionalPadProps {
	gamepad: Gamepad
}

export function LeftDirectionalPad({gamepad}: ILeftDirectionalPadProps) {
	const upButton = gamepad.buttons[upButtonIndex] || dummyButton
	const downButton = gamepad.buttons[downButtonIndex] || dummyButton
	const leftButton = gamepad.buttons[leftButtonIndex] || dummyButton
	const rightButton = gamepad.buttons[rightButtonIndex] || dummyButton
	const upButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: upButton.pressed
	})
	const downButtonClassName = classNames({
		[ButtonStyle]: true,
		[ButtonPressedStyle]: downButton.pressed
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
			<circle className={OutlineStyle} id='DOutline' cx='166' cy='238' r='37.5'/>
			<g id='DUp'>
				<mask id='path-8-inside-1' fill='white'>
					<path
						d='M177.669 222.335C180.793 219.21 180.816 213.997 176.868 212.014C176.327 211.743 175.776 211.491 175.215 211.258C172.182 210.002 168.931 209.355 165.648 209.355C162.365 209.355 159.114 210.002 156.081 211.258C155.521 211.491 154.969 211.743 154.429 212.014C150.48 213.997 150.503 219.21 153.627 222.335L159.991 228.698C163.116 231.823 168.181 231.823 171.305 228.698L177.669 222.335Z'></path>
				</mask>
				<path className={upButtonClassName}
					d='M177.669 222.335C180.793 219.21 180.816 213.997 176.868 212.014C176.327 211.743 175.776 211.491 175.215 211.258C172.182 210.002 168.931 209.355 165.648 209.355C162.365 209.355 159.114 210.002 156.081 211.258C155.521 211.491 154.969 211.743 154.429 212.014C150.48 213.997 150.503 219.21 153.627 222.335L159.991 228.698C163.116 231.823 168.181 231.823 171.305 228.698L177.669 222.335Z'
					fill='rgba(0,0,0,0)' stroke='rgba(0,0,0,1)' strokeWidth='10' mask='url(#path-8-inside-1)'></path>
			</g>
			<g id='DRight'>
				<mask id='path-9-inside-2' fill='white'>
					<path
						d='M181.447 249.669C184.571 252.793 189.785 252.816 191.768 248.868C192.039 248.327 192.291 247.776 192.523 247.215C193.78 244.182 194.426 240.931 194.426 237.648C194.426 234.365 193.78 231.114 192.523 228.081C192.291 227.521 192.039 226.969 191.768 226.429C189.785 222.48 184.571 222.503 181.447 225.627L175.083 231.991C171.959 235.116 171.959 240.181 175.083 243.305L181.447 249.669Z'></path>
				</mask>
				<path className={rightButtonClassName}
					d='M181.447 249.669C184.571 252.793 189.785 252.816 191.768 248.868C192.039 248.327 192.291 247.776 192.523 247.215C193.78 244.182 194.426 240.931 194.426 237.648C194.426 234.365 193.78 231.114 192.523 228.081C192.291 227.521 192.039 226.969 191.768 226.429C189.785 222.48 184.571 222.503 181.447 225.627L175.083 231.991C171.959 235.116 171.959 240.181 175.083 243.305L181.447 249.669Z'
					fill='rgba(0,0,0,0)' stroke='rgba(0,0,0,1)' strokeWidth='10' mask='url(#path-9-inside-2)'></path>
			</g>
			<g id='DDown'>
				<mask id='path-10-inside-3' fill='white'>
					<path
						d='M154.113 253.447C150.989 256.571 150.966 261.785 154.914 263.767C155.455 264.039 156.006 264.291 156.566 264.523C159.6 265.78 162.85 266.426 166.134 266.426C169.417 266.426 172.667 265.78 175.701 264.523C176.261 264.291 176.812 264.039 177.353 263.767C181.301 261.785 181.279 256.571 178.154 253.447L171.79 247.083C168.666 243.959 163.601 243.959 160.477 247.083L154.113 253.447Z'></path>
				</mask>
				<path className={downButtonClassName}
					d='M154.113 253.447C150.989 256.571 150.966 261.785 154.914 263.767C155.455 264.039 156.006 264.291 156.566 264.523C159.6 265.78 162.85 266.426 166.134 266.426C169.417 266.426 172.667 265.78 175.701 264.523C176.261 264.291 176.812 264.039 177.353 263.767C181.301 261.785 181.279 256.571 178.154 253.447L171.79 247.083C168.666 243.959 163.601 243.959 160.477 247.083L154.113 253.447Z'
					fill='rgba(0,0,0,0)' stroke='rgba(0,0,0,1)' strokeWidth='10' mask='url(#path-10-inside-3)'></path>
			</g>
			<g id='DLeft'>
				<mask id='path-11-inside-4' fill='white'>
					<path
						d='M150.335 226.113C147.21 222.989 141.997 222.966 140.014 226.914C139.743 227.455 139.491 228.006 139.258 228.566C138.002 231.6 137.355 234.85 137.355 238.134C137.355 241.417 138.002 244.667 139.258 247.701C139.491 248.261 139.743 248.812 140.014 249.353C141.997 253.301 147.21 253.279 150.335 250.154L156.698 243.79C159.823 240.666 159.823 235.601 156.698 232.477L150.335 226.113Z'></path>
				</mask>
				<path className={leftButtonClassName}
					d='M150.335 226.113C147.21 222.989 141.997 222.966 140.014 226.914C139.743 227.455 139.491 228.006 139.258 228.566C138.002 231.6 137.355 234.85 137.355 238.134C137.355 241.417 138.002 244.667 139.258 247.701C139.491 248.261 139.743 248.812 140.014 249.353C141.997 253.301 147.21 253.279 150.335 250.154L156.698 243.79C159.823 240.666 159.823 235.601 156.698 232.477L150.335 226.113Z'
					fill='rgba(0,0,0,0)' stroke='rgba(0,0,0,1)' strokeWidth='10' mask='url(#path-11-inside-4)'></path>
			</g>
		</g>
	)
}