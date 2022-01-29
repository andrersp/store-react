
import { useRouter } from "next/router";

import DefaultButton from '../../src/Components/DefaultButton'

const Product = () => {

    const router = useRouter();

    return (
        <>
            <h1>Página de Produto</h1>

            <DefaultButton
                onClick={() => {
                    router.push("/")
                }}
            >Voltar</DefaultButton>

        </>
    )
}

export default Product;