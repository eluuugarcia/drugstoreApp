import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import { Icon } from "galio-framework";
import { StackVenta } from "./StackVenta";
import Stock from "../Stock/Stock";
import { StackInforme } from "./StackInforme";
import { StackClientes } from "./StackClientes";
import MiUsuario from "../Usuario/MiUsuario";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import THEME from "../GlobalUtils/THEME";

const Nav = createMaterialBottomTabNavigator(
  {
    Inicio: {
      screen: StackVenta,
      navigationOptions: {
        tabBarColor: THEME.appBarColor,
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="dollar" size={25} color={tintColor}></FontAwesome>
        )
      }
    },
    Stock: {
      screen: Stock,
      navigationOptions: {
        tabBarColor: "#b80b4a",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="barcode" size={25} color={tintColor}></FontAwesome>
        )
      }
    },
    Informes: {
      screen: StackInforme,
      navigationOptions: {
        tabBarColor: "#3d5afe",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name="pie-chart"
            size={25}
            color={tintColor}
          ></FontAwesome>
        )
      }
    },
    Clientes: {
      screen: StackClientes,
      navigationOptions: {
        tabBarColor: "#0091ea",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="male" size={25} color={tintColor}></FontAwesome>
        )
      }
    },
    "Mi Usuario": {
      screen: MiUsuario,
      navigationOptions: {
        tabBarColor: "#b42b00",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={25} color={tintColor}></FontAwesome>
        )
      }
    }
  },
  {
    initialRouteName: "Inicio",
    activeColor: "#fff",
    inactiveColor: "#9c9ba2"
  }
);

const NavBar = createAppContainer(Nav);

export { NavBar };
