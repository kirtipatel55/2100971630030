import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test';

export const fetchProducts = async (company, category, minPrice, maxPrice, topN) => {
    try {
        const response = await axios.get(`${BASE_URL}/companies/${company}/categories/${category}/products/top-${topN}minPrice-${minPrice}maxPrice-${maxPrice}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
