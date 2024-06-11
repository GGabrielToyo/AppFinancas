import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { GraficoBarras } from '../components/GraficoBarras';
import AddDespesaModal from '../components/AddDespesaModal';
import { useState } from 'react';
import { getUsuario } from '../service/usuarioService';
import { Usuario } from '../interfaces/usuario';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { getDespesas } from '../service/despesaService';


export default function Home() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [usuario, setUsuario] = useState<Usuario>();
    const [despesas, setDespesas] = useState<number>();

    useFocusEffect(
        React.useCallback(() => {
            getInfoUsuario();
            getInfoDespesas();
        }, [])
    );

    async function getInfoUsuario() {
        const user = await getUsuario();
        setUsuario(user[0]);
    }

    async function getInfoDespesas() {
        const despesas = await getDespesas();
        setDespesas(despesas);
    }

    function calcularSaldo(): string {
        if (despesas > usuario.rendaMensal) {
            return '- R$ ' + (despesas - usuario.rendaMensal).toFixed(2).replace('.', ',');
        } else {
            return ' R$ ' + (usuario.rendaMensal - despesas).toFixed(2).replace('.', ',');
        }
    }

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    } else {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <LinearGradient
                    colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
                    style={styles.headerGradient}>

                    <Text style={styles.txtWelcome}>Bem vindo(a),
                        {'\n'}
                        {usuario ? usuario.nome : 'Carregando...'}.</Text>
                </LinearGradient>

                <View style={{ width: '100%', alignItems: 'center', }}>
                    <View style={styles.resumoSaldo}>
                        <View style={{ padding: 20 }}>
                            <Text style={styles.txtLabel}>Seu saldo total</Text>
                            <Text style={styles.txtSaldo}>{usuario ? calcularSaldo() : 'Carregando...'}</Text>
                        </View>

                        <GraficoBarras />
                    </View>
                </View>

                <TouchableOpacity style={styles.addDespesa} onPress={() => setModalVisible(true)}>
                    <View>
                        <LinearGradient colors={['rgba(73, 96, 249, 1)', 'rgba(20, 51, 255, 1)']}
                            style={styles.accountGradient}>
                            <Text style={{ color: '#fff', fontFamily: 'Montserrat_400Regular', fontSize: 19 }}>Adicionar despesa</Text>
                        </LinearGradient>
                    </View>
                </TouchableOpacity>

                <AddDespesaModal
                    visible={modalVisible}
                    onClose={() => {
                        getInfoDespesas();
                        setModalVisible(false);
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        marginBottom: '20%',
    },
    headerGradient: {
        width: '100%',
        height: '40%',
        padding: 20,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
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
    txtLabel: {
        color: '#3a3a3a',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular'
    },
    txtSaldo: {
        color: '#2d99ff',
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold'
    },
    resumoSaldo: {
        backgroundColor: '#fff',
        width: '80%',
        height: 250,
        top: -50,
        borderRadius: 30,

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    addDespesa: {
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
        marginTop: 10,

        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    }
});