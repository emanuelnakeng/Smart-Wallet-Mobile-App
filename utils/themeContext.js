import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState(false);

	return (
		<ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
