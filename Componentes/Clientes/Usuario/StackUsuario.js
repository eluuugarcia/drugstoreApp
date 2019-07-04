import { createStackNavigator } from 'react-navigation';
import Estadisticas from './Estadisticas.js.js.js';
import Graficos from './Graficos.js.js.js';
import Tablas from './Tablas';


const StackUsuario = createStackNavigator({
  MiUsuario: {
    screen: MiUsuario,
  },
  Logout: {
    screen: Logout,
  },

});


export { StackUsuario };
