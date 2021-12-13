import './index.scss'
import React from 'react'

const scriptElement = document.createElement('script')
// 支持所有svg渲染的icon组件, 图标请查看 -> https://iconpark.oceanengine.com/home
scriptElement.src = 'https://lf1-cdn-tos.bytegoofy.com/obj/iconpark/svg_4852_11.4da6ee89218a621500327b03ca1d4827.js'
document.body.appendChild(scriptElement)

type IconProps = {
	type: string
	className?: string
}

const SvgIcon: React.FC<IconProps> = (props) => {
	return (
		<svg className={props.className ? props.className : 'iconPark-icon'}>
			<use xlinkHref={`#${props.type}`} />
		</svg>
	)
}

export default SvgIcon
