import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const Header = props => {
	//const [label, setlabel] = useState("Theme");

	const themeNames = Object.keys(props.themes).map(theme => {
		const active = (theme === props.currentTheme) ? true : false;
		return { label: theme, onClick: () => { handleThemeSelect(theme) }, active: active }
	});

	const langCodes = Object.keys(props.langs).map(lang => {
		const active = (lang === props.currentLang) ? true : false;
		return { label: props.langs[lang], onClick: () => { handleLangSelect(lang) }, active: active }
	});

	const handleThemeSelect = theme => {
		props.onThemeSelect(theme);
	}

	const handleLangSelect = langcode => {
		props.onLangSelect(langcode);
	}
	console.log(langCodes)
	console.log(themeNames)

	return (
		
		<div>
			<Typography variant="h2" component="h2">
				h1. Heading
			</Typography>
		</div>
	)
}

export default Header;