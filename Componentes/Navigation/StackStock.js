import { createStackNavigator } from 'react-navigation';
import Stock from './Stock';


const StackStock = createStackNavigator({
  Stock: {
    screen: Stock,
  },

});


export { StackStock };
