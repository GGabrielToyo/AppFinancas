import { LinearGradient } from "expo-linear-gradient";
import { Button, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from "react";
import { SeparatorItem } from "../components/SeparatorItem";

export default function Perfil() {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [renda, setRenda] = useState('');

    const [isEditing, setIsEditing] = useState(false);
    const toggleSwitch = () => setIsEditing(previousState => !previousState);

    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    } else {
        return (

            <View style={styles.container}>
                <LinearGradient
                    colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
                    style={styles.headerGradient}>

                    <TextInput
                        style={styles.txtUsuario}
                        value={nome}
                        onChangeText={setNome}
                        placeholder="Digite seu nome"
                        placeholderTextColor="white"
                        editable={isEditing}
                    />

                    <View style={styles.containerEdicao}>
                        <Text style={styles.txtLabelEdicao}>Editar informações</Text>

                        <Switch
                            trackColor={{ false: '#3a3a3a', true: '#ffcf87' }}
                            thumbColor={isEditing ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3ew"
                            onValueChange={toggleSwitch}
                            value={isEditing}
                        />
                    </View>
                </LinearGradient>

                <View style={styles.containerRenda}>
                    <Text style={styles.txtLabel}>Renda Mensal:</Text>
                    <TextInput
                        style={styles.txtInput}
                        value={renda}
                        onChangeText={setRenda}
                        placeholder="R$ "
                        placeholderTextColor='#2d99ff'
                        editable={isEditing} />
                </View>

                <SeparatorItem />

                <View style={styles.containerRenda}>
                    <Text style={styles.txtLabel}>Email:</Text>
                    <TextInput
                        style={styles.txtInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="@email.com"
                        placeholderTextColor='#2d99ff'
                        editable={isEditing} />
                </View>

                <SeparatorItem />

                <View style={styles.containerRenda}>
                    <Text style={styles.txtLabel}>Endereço:</Text>
                    <TextInput
                        style={styles.txtInputEndereco}
                        value={endereco}
                        onChangeText={setEndereco}
                        placeholder="Rua Rio de Janeiro, nº 5"
                        placeholderTextColor='#2d99ff'
                        editable={isEditing} />
                </View>

                <LinearGradient
                    colors={['rgba(73, 96, 249, 1)', 'rgba(25, 55, 254, 1)']}
                    style={styles.bottomGradient}>
                    <View style={styles.footer}>
                        <View style={{ marginBottom: 5 }}>
                            <Button title="Configurações" onPress={() => { /* Navegar para a página de configurações */ }} />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Button title="Ajuda e Suporte" onPress={() => { /* Navegar para a página de suporte */ }} />
                        </View>
                        <View>
                            <Text style={styles.txtFooter}>Versão 1.0.0</Text>
                        </View>
                    </View>
                </LinearGradient>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerGradient: {
        width: '100%',
        height: 150,
        padding: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 180,
    },
    bottomGradient: {
        width: '100%',
        height: 150,
        padding: 20,
        marginTop: 60,
        borderBottomLeftRadius: 180,
        borderBottomRightRadius: 5,
    },
    containerRenda: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    containerEdicao: {
        width: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
    },
    txtUsuario: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_400Regular',
        padding: 10,
    },
    txtInput: {
        width: '40%',
        padding: 15,
        color: '#2d99ff',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    },
    txtInputEndereco: {
        width: '70%',
        padding: 15,
        color: '#2d99ff',
        fontSize: 18,
        fontFamily: 'Montserrat_700Bold'
    }, txtLabel: {
        color: '#3a3a3a',
        fontSize: 18,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 15
    },
    txtLabelEdicao: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular',
        marginLeft: 15
    },
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',

    },
    txtFooter: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_400Regular',
        padding: 10,
    }
});