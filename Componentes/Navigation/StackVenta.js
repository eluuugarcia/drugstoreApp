import { createStackNavigator } from "react-navigation";
import CargarProductos from "../Venta/Agregar Productos/CargarProductos";
import Inicio from "../Venta/Inicio";
import LeerProductos from "../Venta/Escanear Productos/LeerProductos";
import BuscarProductos from "../Venta/Buscar Productos/BuscarProductos";
import Venta from "../Venta/Venta/Venta";
import VentaMayorista from "../Venta/Venta/VentaMayorista";
import NuevoProducto from "../Venta/Agregar Productos/NuevoProducto";
import PagoVenta from "../Venta/PagoVenta";

const StackVenta = createStackNavigator({
  Inicio: {
    screen: Inicio,
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
  },
  VentaMayorista: {
    screen: VentaMayorista,
    navigationOptions: {
      header: null
    }
  },
  Venta: {
    screen: Venta,
    navigationOptions: {
      header: null
    }
  },
  NuevoProducto: {
    screen: NuevoProducto,
    navigationOptions: {
      header: null
    }
  },
  PagoVenta: {
    screen: PagoVenta,
    navigationOptions: {
      header: null
    }
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
