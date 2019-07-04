import { createStackNavigator } from "react-navigation";
import CargarProductos from "../Venta/Agregar Productos/CargarProductos";
import Venta from "../Venta/Venta";
import LeerProductos from "../Venta/Leer Productos/LeerProductos";
import BuscarProductos from "../Venta/Buscar Productos/BuscarProductos";

const StackVenta = createStackNavigator({
  Venta: {
    screen: Venta,
    navigationOptions: {
      header: null
    }
  },
  BuscarProductos: {
    screen: BuscarProductos
  },
  CargarProductos: {
    screen: CargarProductos
  },
  LeerProductos: {
    screen: LeerProductos
  }
});

StackVenta.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName === "LeerProductos") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export { StackVenta };
