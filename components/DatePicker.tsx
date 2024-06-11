import React, { useState } from 'react';
import { Platform, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ date, setDate }) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    if (Platform.OS === 'web') {
        return (
            <View style={styles.dateInput}>
                <input
                    type="date"
                    value={date.toISOString().split('T')[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                    style={styles.webDatePicker}
                />
            </View>
        );
    } else {
        return (
            <View>
                <TouchableOpacity onPress={showDatepicker} style={styles.dateButton}>
                    <Text style={styles.dateText}>Selecionar Data</Text>
                </TouchableOpacity>
                {show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    dateButton: {
        width: '100%',
        height: 20,
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
    },
    webDatePicker: {
        width: '100%',
        height: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    dateInput: {
        marginBottom: 15,
    },
});

export default DatePicker;
