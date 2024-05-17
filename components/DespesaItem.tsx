import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { Despesa } from "../interfaces/despesa";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export function DespesaItem({ descricao, valor, data }: Despesa) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.descricao}>{descricao}</Text>
                    <Text style={styles.data}>{data}</Text>
                </View>

                <Text style={styles.valor}>{valor}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
    },
    descricao: {
        fontSize: 18,
        color: "#fff",
        fontFamily: 'Montserrat_400Regular',
        paddingBottom: 1,
    },
    valor: {
        fontSize: 20,
        color: "#000",
    },
    data: {
        fontSize: 18,
        color: "#bfbfbf"
    }
});