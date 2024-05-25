import { StyleSheet, View } from 'react-native';


export function GraficoBarras() {
    return (
        < View style={styles.containerGraficoEmBarras}>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 120,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 35,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 25
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 25,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 80,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 45
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 15,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 60,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 65
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 6,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 40,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 126
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 25,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 100
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 20,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 80,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 45
            }}>
            </View>
            <View style={{
                backgroundColor: '#2d99ff',
                width: 10,
                height: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                margin: 5,
                marginTop: 125
            }}>
            </View>
            <View style={{
                backgroundColor: '#a5f3ff',
                width: 10,
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: 5,
                marginTop: 25
            }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerGraficoEmBarras: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -20,
        marginLeft: 10,
        marginRight:10
    },
})

