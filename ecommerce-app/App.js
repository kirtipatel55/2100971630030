import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './components/AllProductsPage';
import ProductDetailsPage from './components/ProductDetailsPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={AllProductsPage} />
                <Route path="/product/:productId" component={ProductDetailsPage} />
            </Switch>
        </Router>
    );
};

export default App;
