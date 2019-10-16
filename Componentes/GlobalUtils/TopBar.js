import React from "react";
import { Appbar } from "react-native-paper";
import THEME from "./THEME";

const TopBar = (props) => {
  return (
    <Appbar.Header
      statusBarHeight={0}
      style={{ backgroundColor: THEME.appBarColor }}
    >
      <Appbar.BackAction
        onPress={() => {
          props.goBack();
        }}
      />
      <Appbar.Content
        title={props.title}
        subtitle={props.subtitle ? props.subtitle : null}
      />
      {props.children}
    </Appbar.Header>
  );
};

export default TopBar;
