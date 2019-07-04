import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';
import { Icon } from 'galio-framework';
import { StackVenta } from './Venta/StackVenta';
import Stock from './Stock/Stock';
import { StackInforme } from './Informe/StackInforme';
import { StackClientes } from './Clientes/StackClientes';
import MiUsuario from './Usuario/MiUsuario';


const Nav = createMaterialBottomTabNavigator(
  {
    Venta: {
      screen: StackVenta,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="dollar" family="FontAwesome" color={tintColor} size={25} />
        ),
      },
    },
    Stock: {
      screen: Stock,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="barcode" family="FontAwesome" color={tintColor} size={25} />
        ),
      },
    },
    Informes: {
      screen: StackInforme,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="pie-chart" family="FontAwesome" color={tintColor} size={25} />
        ),
      },
    },
    Clientes: {
      screen: StackClientes,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="male" family="FontAwesome" color={tintColor} size={25} />
        ),
      },
    },
    'Mi Usuario': {
      screen: MiUsuario,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" family="FontAwesome" color={tintColor} size={23} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Venta',
    activeColor: 'white',
    inactiveColor: '#7374a5',
    barStyle: { backgroundColor: '#35377c' },
    // activeColor: '#0e93fa',
    // inactiveColor: '#5f5f5f',
    // barStyle: { backgroundColor: '#e0e0e0' },
  },

);

const NavBar = createAppContainer(Nav);


export { NavBar };
