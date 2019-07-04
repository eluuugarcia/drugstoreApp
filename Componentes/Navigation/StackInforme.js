import { createStackNavigator } from 'react-navigation';
import Estadisticas from './Estadisticas';
import Graficos from './Graficos';
import Tablas from './Tablas';


const StackInforme = createStackNavigator({
  Estadísticas: {
    screen: Estadisticas,
  },
  Graficos: {
    screen: Graficos,
  },
  Tablas: {
    screen: Tablas,
  },

});


export { StackInforme };
