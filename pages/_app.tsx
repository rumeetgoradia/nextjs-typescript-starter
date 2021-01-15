import { CssBaseline } from "@material-ui/core"
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core/styles"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import { useEffect } from "react"
import { ThemeProvider as SCThemeProvider } from "styled-components"
import SEO from "../next-seo.config"
import theme from "../theme"

const App: React.FC = ({ children }) => {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	return (
		<>
			<DefaultSeo {...SEO} />
			<MaterialThemeProvider theme={theme}>
				<CssBaseline />
				<SCThemeProvider theme={theme}>{children}</SCThemeProvider>
			</MaterialThemeProvider>
		</>
	)
}

export default class InheritedApp extends NextApp {
	render() {
		const { Component, pageProps } = this.props

		return (
			<App>
				<Component {...pageProps} />
			</App>
		)
	}
}
