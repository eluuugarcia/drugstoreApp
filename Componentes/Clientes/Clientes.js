// import liraries
import React, { useState } from "react";
import { View, Button, Text, StyleSheet } from "react-native";

export default function Clientes() {
  //const [count, setCount] = useState(0);

  // function buttonClickHandler() {
  //   setCount(count + 1);
  // }

  return (
    <View style={{ flex: 1 }}>
      <Text>You clicked times.</Text>
      <Button
        //onPress={buttonClickHandler}
        title="Click me"
        color="red"
        accessibilityLabel="Click this button to increase count"
      />
    </View>
  );
}

// create a component
// class Clientes extends Component {
//   render() {
//     const { navigation } = this.props;
//     return (
//       <View style={styles.container}>
//         <Text>CLIENTEEEEEES</Text>
//       </View>
//     );
//   }
// }

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f7f7f7"
//   },
//   fondo: {
//     backgroundColor: "red"
//   }
// });

// make this component available to the app
//export default Clientes;
