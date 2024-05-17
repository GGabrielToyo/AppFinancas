import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../views/Home';
import Gastos from '../views/Gastos';
import Perfil from '../views/Perfil';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='credit-card' color={color} size={size} />,
                    tabBarLabel: 'Saldo'
                }} />

            <Tab.Screen
                name="Gastos"
                component={Gastos}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='dollar-sign' color={color} size={size} />,
                    tabBarLabel: 'Gastos'
                }} />
        </Tab.Navigator>
    );
}