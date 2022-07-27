import classNames from 'classnames'
import {ButtonPressedStyle, OutlineStyle} from './BumperButton.module.scss'

const x = {
	left: 111.5,
	right: 289.5
}

interface IBumperButtonProps {
	name: 'left' | 'right'
	button: GamepadButton
}

export function BumperButton({name, button}: IBumperButtonProps) {
	const className = classNames({
		[OutlineStyle]: true,
		[ButtonPressedStyle]: button.pressed
	})
	return <rect className={className} x={x[name]} y='61.5' width='41' height='13' rx='6.5'/>
}