import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Perfil from '../views/Perfil';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ title: '' }}>
            <Stack.Screen
                name="_Home"
                component={Perfil}
                options={{
                    
                }} />
        </Stack.Navigator>
    );
}