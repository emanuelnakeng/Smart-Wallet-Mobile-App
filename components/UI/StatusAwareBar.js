import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const FocusAwareStatusBar = statusProps => {
	const isFocused = useIsFocused();

	return isFocused ? <StatusBar {...statusProps} /> : null;
};

export default FocusAwareStatusBar;
