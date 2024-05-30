import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../utils/api';
import { Container, Typography } from '@material-ui/core';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = React.useState(null);

    React.useEffect(() => {
        fetchProductById(productId).then(data => setProduct(data));
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Typography variant="h3">{product.productName}</Typography>
            <Typography variant="body1">Company: {product.company}</Typography>
            <Typography variant="body1">Category: {product.category}</Typography>
            <Typography variant="body1">Price: ${product.price}</Typography>
            <Typography variant="body1">Rating: {product.rating}</Typography>
            <Typography variant="body1">Discount: {product.discount}%</Typography>
            <Typography variant="body1">Availability: {product.availability}</Typography>
        </Container>
    );
};

export default ProductDetailsPage;
