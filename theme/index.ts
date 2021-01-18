import { extendTheme, Theme, ThemeConfig } from "@chakra-ui/react"
import components from "./components"
import foundations from "./foundations"
import styles, { fontFaces } from "./styles"

const config: ThemeConfig = {
	useSystemColorMode: true,
	initialColorMode: "light",
}

const theme: Theme = extendTheme({
	...foundations,
	components,
	styles,
	config,
})

export { fontFaces }
export default theme
