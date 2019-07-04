import { createStackNavigator } from 'react-navigation';
import Clientes from './Clientes';


const StackClientes = createStackNavigator({
  Clientes: {
    screen: Clientes,
  },

});


export { StackClientes };
