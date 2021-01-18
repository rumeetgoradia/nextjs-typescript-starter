import theme, { fontFaces } from "@/theme"
import { ChakraProvider, useColorMode } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { DefaultSeo } from "next-seo"
import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const { colorMode } = useColorMode()
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider theme={theme}>
				<Global styles={fontFaces} />
				<ThemeProvider defaultTheme={colorMode} disableTransitionOnChange>
					<Component {...pageProps} />
				</ThemeProvider>
			</ChakraProvider>
		</>
	)
}

export default App
