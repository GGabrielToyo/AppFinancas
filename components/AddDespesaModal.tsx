import { StyleSheet, Button, Modal, TextInput, View, Text, Platform, TouchableOpacity } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import DatePickerComponent from '../components/DatePicker';
import { useState } from "react";
import { Despesa } from "../interfaces/despesa";
import { addDespesa } from "../service/despesaService";
import { addDays, format } from 'date-fns';


interface CustomModalProps {
    visible: boolean;
    onClose: () => void;
}

export default function AddDespesaModal({ visible, onClose }: CustomModalProps) {
    let [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold
    });

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState(new Date());

    function formatDate(data: Date | string) {
        if (format(data, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd')) {
            return format(data, 'yyyy-MM-dd');
        } else {
            return format(addDays(data, 1), 'yyyy-MM-dd');
        }
    }

    function limpaDados(): void {
        setDescricao('');
        setValor('');
        setData(new Date());
    }

    async function salvarDespesa() {
        const despesa: Despesa = {
            descricao: descricao,
            valor: parseFloat(valor),
            data: formatDate(data),

        };
        await addDespesa(despesa)
        limpaDados();
        onClose();
    }


    if (!fontsLoaded) {
        return <Text>Carregando...</Text>;
    } else {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={onClose}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Adicionar nova despesa</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Descrição"
                            onChangeText={setDescricao}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Valor"
                            keyboardType="numeric"
                            onChangeText={setValor}
                        />
                        <View style={styles.inputData}>
                            <DatePickerComponent date={data} setDate={setData} />
                        </View>

                        <View style={styles.containerButton}>
                            <Button title="Cancelar" onPress={onClose} color={'#f00000'} />
                            <Button title="Salvar" onPress={salvarDespesa} />
                        </View>
                    </View>
                </View>
            </Modal >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addDespesa: {
        marginBottom: 20,
    },
    accountGradient: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,0.5)', // Fundo escuro
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
    },
    inputData: {
        width: '90%',
        marginRight: 22
    },
    dateButton: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dateText: {
        color: 'black',
    }
});