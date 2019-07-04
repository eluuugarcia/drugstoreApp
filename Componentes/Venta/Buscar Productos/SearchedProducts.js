import React from 'react';
import ProductsList from './ProductsList';
import NoProductsFound from './NoProductsFound';

function SearchedProducts(props) {
  if (props.searchedProducts.length > 0) {
    return (
      <ProductsList
        products={props.searchedProducts}
      />


    );
  }

  return (<NoProductsFound />);
}

export default SearchedProducts;
