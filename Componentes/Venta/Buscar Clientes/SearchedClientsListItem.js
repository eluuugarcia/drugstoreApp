import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { LinearGradient } from "expo-linear-gradient";
import { ListItem } from "react-native-elements";
import { connect } from "react-redux";

// const uri = 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png'
// const uri = "https://legicgroup.com/wp-content/uploads/2016/12/businessman.png";
// const uri = "https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png";

// const uri = "https://static.thenounproject.com/png/980181-200.png";

// const uri =
//   "https://www.robahgram.ir/wp-content/uploads/backup/2019/03/User.png";

// const uri = "http://www.icons101.com/icon_png/size_512/id_77658/UserFolder.png";

// const uri = "https://www.pngrepo.com/download/211021/id-card-user.png";
// const uri = "https://img.icons8.com/officel/2x/user-shield.png";
// const uri = "http://corpae.org/carnets/images/carnets1-01.png";

// const uri =
//   "https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png";

const uri = "https://www.pngrepo.com/download/211021/id-card-user.png";

function Cliente(props) {
  return (
    <ListItem
      key={props.cliente.cliente.CUIT}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.96}
      linearGradientProps={{
        colors: ["#f8f8f8", "#f0f0f0"],
        start: [1, 0],
        end: [0.2, 0]
      }}
      onPress={() => props.chooseClient(props.cliente)}
      ViewComponent={LinearGradient} // Only if no expo
      leftAvatar={
        <View>
          <Image
            style={{ width: 40, height: 40, resizeMode: "contain" }}
            source={{
              uri
            }}
          />
        </View>
      }
      title={props.cliente.cliente.razonSocial}
      titleStyle={{ color: "#35377c", fontWeight: "bold" }}
      subtitleStyle={{ color: "white" }}
      subtitle={
        <Text style={{ color: "#7a7bb1" }}>
          CUIT: {props.cliente.cliente.CUIT} / DNI:{" "}
          {props.cliente.cliente.numeroDocumento}
        </Text>
      }
      chevronColor="#000"
      chevron
    />
  );
}

const mapDispatchToProps = dispatch => ({
  chooseClient: client => {
    dispatch({ type: "CHOOSE_CLIENT", client });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Cliente);
