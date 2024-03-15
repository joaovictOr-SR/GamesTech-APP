import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import  DrawerRoutes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}