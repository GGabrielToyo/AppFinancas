import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <LinearGradient
                    colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
                    style={styles.headerGradient}>
                    <View style={styles.row}>
                        <Feather name='menu' size={24} color="white"></Feather>
                        <Image
                            style={styles.imgProfile} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/t2/2318271-icone-do-perfil-do-usuario-vetor.jpg' }}>

                        </Image>
                    </View>
                    <Text style={styles.txtWelcome}>Bem vindo(a),
                        {'\n'}
                        usuário.</Text>
                </LinearGradient>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={styles.resumoSaldo}>
                        <Text style={{ color: '#3a3a3a', fontSize: 16, fontFamily: 'Montserrat_400Regular' }}>Seu saldo total</Text>
                        <Text style={{ color: '#2d99ff', fontSize: 30, fontFamily: 'Montserrat_700Bold' }}>R$ 8.500,00</Text>
                    </View>
                </View>

                <View style={styles.verifyAccount}>
                    <LinearGradient colors={['rgba(73, 96, 249, 1)', 'rgba(20, 51, 255, 1)']}
                        style={styles.accountGradient}>
                        <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular', fontSize: 19 }}>Verifique suas contas bancárias</Text>
                    </LinearGradient>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center'
    },
    headerGradient: {
        width: '100%',
        height: '40%',
        padding: '20',
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },
    imgProfile: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    txtWelcome: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_400Regular',
        padding: 20,
    },
    resumoSaldo: {
        backgroundColor: '#fff',
        width: '80%',
        height: 250,
        top: -50,
        borderRadius: 30,
        padding: 20,

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    verifyAccount: {
        width: '80%',
        height: '20%',
    },
    accountGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    }
});