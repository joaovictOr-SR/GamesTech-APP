import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Feed from '../screens/Feed';
import About from '../screens/About';
import Blog from '../screens/Blog';
import Info1 from '../screens/Info1';
import Info2 from '../screens/Info2';

const TabBottom = createBottomTabNavigator();

function TabBottomRoutes() {
    return (
        <TabBottom.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: "#8314CC",
                tabBarInactiveTintColor: "#fff",
                tabBarStyle: { backgroundColor: '#1F1F22' }
                
            }}>
            <TabBottom.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='home-sharp'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='home-outline'
                        />)
                    }
                }} />
            <TabBottom.Screen name="Feed" component={Feed}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='newspaper'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='newspaper-outline'
                        />)
                    }
                }} />
            <TabBottom.Screen name="About" component={About}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return (<Ionicons
                                size={size}
                                color={color}
                                name='information-circle'
                            />);
                        } return (<Ionicons
                            size={size}
                            color={color}
                            name='information-circle-outline'
                        />)
                    }
                }} />
        </TabBottom.Navigator>
    );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#1F1F22',
            },
            headerTintColor: '#FFFFFF',     
            drawerStyle: {
                backgroundColor: '#1F1F22',
            },
            drawerActiveTintColor: '#8314CC', 
            drawerInactiveTintColor: '#FFFFFF', 
        }}>
            <Drawer.Screen
                name='Inicio'
                component={TabBottomRoutes}
                options={{
                    drawerLabel: 'Ini­cio',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='home' />
                    )
                }}
            />
            <Drawer.Screen
                name='Blog'
                component={StackRoutes}
                options={{
                    drawerLabel: 'Blog',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons size={size} color={color}
                            name='archive' />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='Blog'
                component={Blog}
            />
            <Stack.Screen
                name='Info1'
                component={Info1}
            />
            <Stack.Screen
                name='Info2'
                component={Info2}
            />
        </Stack.Navigator>
    );
}