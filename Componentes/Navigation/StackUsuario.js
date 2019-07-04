import { createStackNavigator } from 'react-navigation';
import MiUsuario from '../Usuario/MiUsuario';
import Logout from '../Usuario/Logout';


const StackUsuario = createStackNavigator({
  MiUsuario: {
    screen: MiUsuario,
  },
  Logout: {
    screen: Logout,
  },

});


export { StackUsuario };
