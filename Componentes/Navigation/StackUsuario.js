import { createStackNavigator } from 'react-navigation';
import MiUsuario from './MiUsuario';
import Logout from './Logout';


const StackUsuario = createStackNavigator({
  MiUsuario: {
    screen: MiUsuario,
  },
  Logout: {
    screen: Logout,
  },

});


export { StackUsuario };
