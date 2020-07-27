import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import ReducersScreen from "./src/screens/ReducersScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen'
import BoxScreen from './src/screens/BoxScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Reducers: ReducersScreen,
    FlatList : ListScreen,
    ImageScreen : ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    TextScreen: TextScreen,
    BoxScreen: BoxScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native App"
    }
  }
);

export default createAppContainer(navigator);
