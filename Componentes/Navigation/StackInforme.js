import { createStackNavigator } from 'react-navigation';
import Estadisticas from '../Informe/Estadisticas';
import Graficos from '../Informe/Graficos';
import Tablas from '../Informe/Tablas';


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
