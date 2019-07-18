import React from "react";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo";

function VentaOption(props) {
  return (
    <ListItem
      onPress={() => props.navigate()}
      containerStyle={{ borderRadius: 10 }}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.85}
      linearGradientProps={{
        colors: [props.rightColor, props.leftColor],
        start: [1, 0],
        end: [0.2, 0]
      }}
      ViewComponent={LinearGradient} // Only if no expo
      leftElement={props.icon}
      title={props.title}
      titleStyle={{
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        textShadowColor: "rgba(34.9, 34.5, 34.5, 0.4)",
        textShadowOffset: {
          width: 1.0,
          height: 1.0
        },
        textShadowRadius: 2,
        marginLeft: 20
      }}
      chevronColor="white"
      chevron
    />
  );
}

export default VentaOption;
