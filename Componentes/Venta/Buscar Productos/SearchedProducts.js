import React from "react";
import SearchProductList from "./SearchProductList";
import NoProductsFound from "./NoProductsFound";

function SearchedProducts(props) {
  if (props.searchedProducts.length > 0) {
    return <SearchProductList products={props.searchedProducts} />;
  }
  return <NoProductsFound />;
}

export default SearchedProducts;
