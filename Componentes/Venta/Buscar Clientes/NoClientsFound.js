import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "react-native-paper";

// "http://www.sclance.com/pngs/nothing-png/nothing_png_939499.jpg";
// "http://www.sclance.com/pngs/problem-png/problem_png_1113337.png"
// "https://www.go.co/media/assets/images/ui/ind-search.png"
// "https://cdn1.iconfinder.com/data/icons/emoticon-of-avatar-man/128/12_man_sad_avatar_emoticon_smiley_people_user-512.png"
// "https://cdn.pixabay.com/photo/2013/07/12/17/12/angry-151791_960_720.png"
// "https://cdn4.iconfinder.com/data/icons/happy-office-workers/50/21-512.png"
// "https://www.pngrepo.com/download/163384/confused.png"
// "https://img.pngio.com/doubt-confused-icons-noun-project-confused-png-black-and-white-200_200.png"
const uri =
  "https://img.pngio.com/doubt-confused-icons-noun-project-confused-png-black-and-white-200_200.png";
function NoClientsFound(props) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#efefef"
      }}
    >
      <View style={{ flex: 1, marginVertical: 100, alignItems: "center" }}>
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: "contain",
            opacity: 0.8
            //backgroundColor: "green"
          }}
          source={{
            uri
          }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#4d4d4d",
            marginVertical: 10
          }}
        >
          OOPS!
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#4d4d4d"
          }}
        >
          No encontramos el cliente...
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#4d4d4d",
            marginVertical: 10
          }}
        >
          ¿Te gustaría agregarlo?
        </Text>
        <Button
          uppercase={false}
          mode="contained"
          style={{ backgroundColor: "#AB47BC" }}
          //onPress={() => props.goToSearchProducts()}
        >
          Nuevo cliente
        </Button>
      </View>
    </View>
  );
}

export default NoClientsFound;
