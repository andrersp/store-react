import { Button } from '@chakra-ui/react'


const DefaultButton = (props) => {
    return (
        <Button borderRadius='md' bg='teal' color='white' px={4} h={8} {...props} />
    )
}

export default DefaultButton;