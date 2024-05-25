import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from '../views/Perfil';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ title: ' ', headerShown: false}}>
            <Stack.Screen
                name="_Home"
                component={Perfil}
                options={{
                    
                }} />
        </Stack.Navigator>
    );
}