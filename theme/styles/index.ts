import { createTransition } from "@/utils"
import { ThemeOverride } from "@chakra-ui/react"
import fontFaces from "./font-faces"

const styles: ThemeOverride["styles"] = {
	global: {
		"html, body": {
			color: "#000",
			background: "#fff",
			scrollBehavior: "smooth",
			transition: createTransition(["color", "background"]),
		},
		"[data-theme='dark'], [data-theme='dark'] body": {
			color: "#fff",
			background: "#000",
		},
	},
}

export { fontFaces }

export default styles
