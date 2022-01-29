import Header from "next/head"
import { ChakraProvider } from "@chakra-ui/react"




const MyApp = ({ Component, pageProps }) => {
    return (


        <ChakraProvider>
            <Header>
                <title>STORE</title>
            </Header>
            <Component {...pageProps} />
        </ChakraProvider>

    )
}

export default MyApp;