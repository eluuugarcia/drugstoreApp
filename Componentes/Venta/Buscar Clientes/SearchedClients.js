import React from "react";
import NoClientsFound from "./NoClientsFound";
import SearchClientsList from "./SearchClientsList";

import { Text } from "react-native";

function SearchedClients(props) {
  if (props.searchedClients.length > 0) {
    return <SearchClientsList clientes={props.searchedClients} />;
  }
  return <NoClientsFound />;
}

export default SearchedClients;
