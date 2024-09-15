import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

function App() {
	return (
		<ChakraProvider>
			<Flex flexDirection="column" minHeight="100vh">
				<Header />
				<Card />
				<Footer />
			</Flex>
		</ChakraProvider>
	);
}

export default App;
