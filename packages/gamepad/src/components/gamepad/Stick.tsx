import classNames from 'classnames'
import {StickStyle, StickPressedStyle, OutlineStyle} from './Stick.module.scss'

const stickOffsetScale = 10

export interface IStickProps {
	button: GamepadButton
	axes: [number, number]
	name: string
	x: number
	y: number
}

export function Stick({x, y, axes, button}: IStickProps) {
	const stickX = x + axes[0] * stickOffsetScale
	const stickY = y + axes[1] * stickOffsetScale
	const stickClassNames = classNames({
		[StickStyle]: true,
		[StickPressedStyle]: button.pressed
	})
	return (
		<g>
			<circle className={OutlineStyle} cx={x} cy={y} r='37.5'/>
			<circle className={stickClassNames} cx={stickX} cy={stickY} r='28'/>
		</g>
	)
}