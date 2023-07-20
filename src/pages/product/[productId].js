import { useRouter } from 'next/router';
import React from 'react';


const productDetails = () => {
    const router = useRouter()
    return (
        <div>
            this is dynamic page of product {router.query.productId}
        </div>
    );
};

export default productDetails;