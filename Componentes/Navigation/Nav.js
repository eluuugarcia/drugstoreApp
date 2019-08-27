import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import React from "react";
import { Icon } from "galio-framework";
import { StackVenta } from "./StackVenta";
import Stock from "../Stock/Stock";
import { StackInforme } from "./StackInforme";
import { StackClientes } from "./StackClientes";
import MiUsuario from "../Usuario/MiUsuario";

const Nav = createMaterialBottomTabNavigator(
  {
    Inicio: {
      screen: StackVenta,
      navigationOptions: {
        tabBarColor: "#5d357c",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="dollar"
            family="FontAwesome"
            color={tintColor}
            size={25}
          />
        )
      }
    },
    Stock: {
      screen: Stock,
      navigationOptions: {
        tabBarColor: "#b80b4a",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="barcode"
            family="FontAwesome"
            color={tintColor}
            size={25}
          />
        )
      }
    },
    Informes: {
      screen: StackInforme,
      navigationOptions: {
        tabBarColor: "#3d5afe",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="pie-chart"
            family="FontAwesome"
            color={tintColor}
            size={25}
          />
        )
      }
    },
    Clientes: {
      screen: StackClientes,
      navigationOptions: {
        tabBarColor: "#0091ea",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="male" family="FontAwesome" color={tintColor} size={25} />
        )
      }
    },
    "Mi Usuario": {
      screen: MiUsuario,
      navigationOptions: {
        tabBarColor: "#b42b00",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" family="FontAwesome" color={tintColor} size={23} />
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
