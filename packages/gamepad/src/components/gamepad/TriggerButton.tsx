import classNames from 'classnames'
import {ButtonPressedStyle, OutlineStyle} from './TriggerButton.module.scss'

const data = {
	left: 'M152.5 37C152.5 41.1421 149.142 44.5 145 44.5H132C127.858 44.5 124.5 41.1421 124.5 37V16.5C124.5 8.76801 130.768 2.5 138.5 2.5C146.232 2.5 152.5 8.76801 152.5 16.5V37Z',
	right: 'M317.5 37C317.5 41.1421 314.142 44.5 310 44.5H297C292.858 44.5 289.5 41.1421 289.5 37V16.5C289.5 8.76801 295.768 2.5 303.5 2.5C311.232 2.5 317.5 8.76801 317.5 16.5V37Z'
}

interface ITriggerButtonProps {
	name: 'left' | 'right'
	button: GamepadButton
}

export function TriggerButton({name, button}: ITriggerButtonProps) {
	const className = classNames({
		[OutlineStyle]: true,
		[ButtonPressedStyle]: button.pressed
	})
	return <path className={className} d={data[name]}/>
}