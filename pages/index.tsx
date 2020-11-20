import { NextSeo } from "next-seo"
import Example from "../components/Example"
import { SITE_NAME } from "../constants"

const IndexPage = () => (
	<>
		<NextSeo titleTemplate="%s" title={SITE_NAME} />
		<Example />
	</>
)

export default IndexPage
