import classNames from 'classnames'
import {MetaButtonStyle, MetaButtonPressedStyle} from './MetaButton.module.scss'

interface IMetaButtonProps {
	button: GamepadButton
	name: string
	x: number
	y?: number
	radius?: number
}

export function MetaButton({x, y = 142, radius = 10, button}: IMetaButtonProps) {
	const className = classNames({
		[MetaButtonStyle]: true,
		[MetaButtonPressedStyle]: button.pressed
	})
	return <circle className={className} cx={x} cy={y} r={radius}/>
}