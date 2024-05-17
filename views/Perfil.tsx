import { StyleSheet, Text, View } from "react-native";

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }
});