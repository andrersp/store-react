import { Box } from '@chakra-ui/react'
import DefaultButton from '../src/Components/DefaultButton';
import { EmailIcon } from "@chakra-ui/icons"
import { useRouter } from 'next/router';



const HomePage = () => {

    const ShowText = () => {
        console.log("Botão pressionado")
    }
    const router = useRouter();

    return (
        <Box bg='tomato' w='100%' p={4} color='white'>

            <h1> Index Page</h1>


            <DefaultButton
                leftIcon={<EmailIcon />}
                onClick={() => {
                    router.push('/products')
                }}
            >Testando</DefaultButton>
        </Box>


    )

}

export default HomePage;