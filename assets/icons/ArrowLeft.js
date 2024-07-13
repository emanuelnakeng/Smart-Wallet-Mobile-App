import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ArrowLeft = props => (
	<Svg
		xmlns='http://www.w3.org/2000/svg'
		width={26}
		height={26}
		fill='none'
		{...props}
	>
		<Path
			fill='#000'
			d='m2 9-.53-.53L.94 9l.53.53L2 9Zm24 .75a.75.75 0 0 0 0-1.5v1.5ZM9.47.47l-8 8 1.06 1.06 8-8L9.47.47Zm-8 9.06 8 8 1.06-1.06-8-8-1.06 1.06Zm.53.22h24v-1.5H2v1.5Z'
		/>
	</Svg>
);
export default ArrowLeft;
