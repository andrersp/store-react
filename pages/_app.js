import Header from "next/head"
import { ChakraProvider } from "@chakra-ui/react"




const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Header>
                <title>STORE</title>
            </Header>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}

export default MyApp;