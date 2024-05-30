import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from './ProductCard';
import { Container, Grid, TextField, Button, Select, MenuItem } from '@material-ui/core';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({ category: '', company: '', rating: 0, minPrice: 0, maxPrice: 10000 });

    useEffect(() => {
        // Example fetching top 10 products
        fetchProducts('AMZ', 'Laptop', 1, 10000, 10).then(data => setProducts(data));
    }, []);

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    const applyFilters = () => {
        fetchProducts(filters.company, filters.category, filters.minPrice, filters.maxPrice, 10).then(data => setProducts(data));
    };

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField label="Category" name="category" value={filters.category} onChange={handleFilterChange} />
                    <TextField label="Company" name="company" value={filters.company} onChange={handleFilterChange} />
                    <TextField label="Min Price" name="minPrice" type="number" value={filters.minPrice} onChange={handleFilterChange} />
                    <TextField label="Max Price" name="maxPrice" type="number" value={filters.maxPrice} onChange={handleFilterChange} />
                    <Button variant="contained" color="primary" onClick={applyFilters}>Apply Filters</Button>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {products.map(product => (
                            <ProductCard key={product.productName} product={product} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AllProductsPage;
