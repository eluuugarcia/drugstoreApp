import React from "react";
import { SearchBar } from "react-native-elements";
import {
  Feather,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";

function Searchbar(props) {
  return (
    <SearchBar
      value={props.search}
      platform="android"
      placeholder={props.placeholder}
      containerStyle={{ backgroundColor: props.backgroundColor }}
      placeholderTextColor="white"
      inputContainerStyle={{ backgroundColor: props.backgroundColor }}
      inputStyle={{ color: "white" }}
      showLoading={false}
      onChangeText={text => props.searchFilterFunction(text)}
      clearIcon={
        <MaterialIcons
          active
          name="close"
          color="white"
          style={{ marginLeft: 20 }}
          size={26}
          onPress={() => {
            props.cancelSearch();
          }}
        />
      }
      cancelIcon={
        <Feather
          active
          name="arrow-left"
          color="white"
          style={{ marginLeft: 20 }}
          size={26}
          onPress={() => {
            props.goBack();
          }}
        />
      }
      searchIcon={
        <FontAwesome
          active
          name="search"
          color="white"
          style={{ marginLeft: 20 }}
          size={20}
        />
      }
    />
  );
}

export default Searchbar;
