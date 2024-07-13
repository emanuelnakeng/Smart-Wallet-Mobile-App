import * as React from 'react';
import Svg, {
	Path,
	Defs,
	RadialGradient,
	Stop,
	G,
	LinearGradient,
} from 'react-native-svg';

const Ecllipse = props => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={390}
		height={195}
		fill='none'
		{...props}
	>
		<Path
			fill='url(#a)'
			d='M390 195A195.003 195.003 0 0 0 195 0 195 195 0 0 0 0 195h390Z'
		/>
		<Defs>
			<RadialGradient
				id='a'
				cx={0}
				cy={0}
				r={1}
				gradientTransform='rotate(90 99.19 95.29) scale(199.42)'
				gradientUnits='userSpaceOnUse'
			>
				<Stop stopColor='#fff' />
				<Stop offset={1} stopColor='#fff' stopOpacity={0} />
			</RadialGradient>
		</Defs>
	</Svg>
);

export default Ecllipse;
