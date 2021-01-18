import Example from "@/components/Example"
import { SITE_NAME } from "@/constants"
import { Button, useColorMode } from "@chakra-ui/react"
import { NextSeo } from "next-seo"
import { useTheme } from "next-themes"

const IndexPage: React.FC = () => {
	const { setTheme } = useTheme()
	const { setColorMode } = useColorMode()

	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<div style={{ height: "100vh" }}>
				<Example />
				<Button
					onClick={() => {
						setTheme("light")
						setColorMode("light")
					}}
				>
					light
				</Button>
				<Button
					onClick={() => {
						setTheme("dark")
						setColorMode("dark")
					}}
				>
					dark
				</Button>
			</div>
		</>
	)
}

export default IndexPage
