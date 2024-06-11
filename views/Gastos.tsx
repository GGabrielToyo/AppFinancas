import { StyleSheet, Text, View } from "react-native";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { FlatList, TextInput } from "react-native-gesture-handler";
import { DespesaItem } from "../components/DespesaItem";
import { fetchDespesas } from "../service/despesaService";
import { Despesa } from "../interfaces/despesa";
import { useFocusEffect } from "@react-navigation/native";

export default function Gastos() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    const [despesas, setDespesas] = useState<Despesa[]>([]);

    useFocusEffect(
        React.useCallback(() => {
            getDespesas();
        }, [])
    );

    function renderItem({ item }) {
        return <DespesaItem {...item} />
    }

    async function getDespesas() {
        const data = await fetchDespesas();
        setDespesas(data);
    }

    function somarDespesas() {
        let total = 0;
        despesas.forEach((despesa) => {
            total += despesa.valor;
        });
        return '- R$ ' + total.toFixed(2).replace('.', ',');
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
                    <View style={styles.row}>
                    </View>
                    <Text style={styles.txtDespesas}>Suas despesas totais.</Text>
                    <Text style={styles.txtDespesasTotais}>{somarDespesas()}</Text>
                </LinearGradient>

                <LinearGradient
                    colors={['rgba(71, 94, 259, 1)', 'rgba(54, 80, 252, 1)']}
                    style={styles.bottomGradient}>
                    <TextInput
                        style={styles.input}
                        placeholder="Procurar">
                    </TextInput>

                    <FlatList
                        style={styles.list}
                        keyExtractor={(item) => item.id.toString()}
                        data={despesas}
                        renderItem={renderItem}
                    />
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#f7f7f7',
        alignItems: 'center'
    },
    headerGradient: {
        width: '100%',
        height: '30%',
        padding: 5,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    bottomGradient: {
        width: '100%',
        flex: 1,
        padding: 20,
        marginTop: 20,
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,

        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        alignItems: 'center',
    },
    txtDespesas: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular',
        padding: 20,
    },
    txtDespesasTotais: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'Montserrat_700Bold'
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
    },
    input: {
        backgroundColor: '#05199e',
        color: '#3d56fa',
        borderRadius: 10,
        height: 38,
        margin: 12,
        borderWidth: 1,
        padding: 20,
    },
    list: {
        flex: 1,
    }
});