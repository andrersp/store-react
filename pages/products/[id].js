import { useRouter } from 'next/router';

const ProductDetail = () => {

    const router = useRouter()
    const { id } = router.query

    return (
        <>
            <p>Product id: {id}</p>
        </>
    )

}

export default ProductDetail;